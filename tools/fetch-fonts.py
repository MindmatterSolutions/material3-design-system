"""Re-vendor the design systems' web fonts.

Fetches each family from the Google Fonts css2 API, keeps the subsets named for
it, writes the .woff2 files under fonts/<family>/ and regenerates one CSS
bundle per group with local paths. Idempotent: re-running replaces what is
there.

    python3 tools/fetch-fonts.py

Two bundles, because the two systems in this repo are deliberately kept apart:

    fonts/fonts.css     the dashboard theme (tokens/m3-expressive.css)
    fonts/baseline.css  Google's baseline Expressive system (baseline/)

Variable faces are requested with their axes so the axes survive -- the theme
drives Roboto Flex's wdth axis, and Material Symbols' opsz/wght/FILL/GRAD are
how an icon changes weight or fills in. A static build drops both silently.

Most families are vendored as latin + latin-ext only; that is what keeps the
set small. Material Symbols is served as a single 'fallback' block covering the
whole icon set, so it keeps that instead. Widen a family's subset set below to
vendor more (cyrillic, greek, vietnamese).
"""
import re, urllib.request, pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent   # repo root
FONTS = OUT / "fonts"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")

LATIN = {"latin", "latin-ext"}

# bundle filename -> (header blurb, [(css2 query, dir slug, subsets to keep)])
BUNDLES = {
    "fonts.css": (
        """The dashboard theme's faces (tokens/m3-expressive.css).
 *
 * Roboto Flex is the Expressive sans and carries all three axes the theme
 * drives: opsz 8..144, wdth 25..151, wght 100..1000. IBM Plex Mono stays for
 * figures and instrument readouts, where tabular digits are the job. Inter is
 * the fallback behind Roboto Flex in --font-sans.""",
        [
            ("Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000", "roboto-flex", LATIN),
            ("IBM+Plex+Mono:wght@400;500;600;700", "ibm-plex-mono", LATIN),
            ("Inter:wght@400..800", "inter", LATIN),
        ],
    ),
    "baseline.css": (
        """Google's baseline Expressive system's faces (baseline/).
 *
 * Google Sans Flex is the Expressive brand face, used by display, headline and
 * title. Roboto Flex is the open face it falls back to, and is also this
 * system's plain face for body and label, so it is declared here as well as in
 * the theme's bundle -- same vendored files, written once on disk, because the
 * two bundles are never loaded on one page. Roboto (a different family from
 * Roboto Flex) is the next fallback after that.
 *
 * Material Symbols ROUNDED -- not Outlined -- is the icon font, subsetted to
 * the glyphs baseline/ actually names.""",
        [
            ("Google+Sans+Flex:opsz,wght@6..144,1..1000", "google-sans-flex", LATIN),
            ("Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000", "roboto-flex", LATIN),
            ("Roboto:ital,wght@0,100..900;1,100..900", "roboto", LATIN),
        ],
    ),
}

# The icon font's glyph list. Unsubsetted, Google Fonts serves Symbols as one
# block covering every icon -- 3.9 MB, far more than the components need -- so
# the request carries an `icon_names=` list and gets back only these. It keeps
# subset {"fallback"} because Symbols is served as one block rather than
# per-script, and font-display:block, because a half-drawn icon reads as a
# missing one. To regenerate after editing baseline/, re-run:
#   python3 tools/icon-names.py
MATERIAL_SYMBOLS_ICONS = [
    "add", "arrow_back", "arrow_forward", "battery_full", "bolt", "bookmark",
    "brush", "calendar_month", "call", "check", "check_box", "check_circle",
    "checklist", "chevron_right", "close", "delete", "directions", "download",
    "edit", "event", "explore", "favorite", "folder", "format_bold",
    "format_italic", "format_underlined", "forward_10", "groups", "home",
    "image", "insights", "keyboard_arrow_down", "library_music", "location_on",
    "mail", "menu", "menu_open", "mic", "more_vert", "music_note",
    "navigation", "notifications", "pause", "person", "photo_camera",
    "play_arrow", "redo", "replay_10", "restart_alt", "school", "search",
    "send", "settings", "share", "signal_cellular_alt", "skip_next",
    "skip_previous", "star", "tab", "thumb_up", "today", "undo", "wifi",
]
BUNDLES["baseline.css"][1].append((
    "Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    "&icon_names=" + ",".join(MATERIAL_SYMBOLS_ICONS),
    "material-symbols",
    {"fallback"},
))

BLOCK = re.compile(r"/\*\s*([a-z0-9-]+)\s*\*/\s*(@font-face\s*\{.*?\})", re.S)
# A subsetted request (icon_names=) comes back as a bare @font-face with no
# /* subset */ comment above it, so the commented pattern finds nothing. These
# faces are labelled "fallback", which is what Symbols' own subset is called.
BARE = re.compile(r"(@font-face\s*\{.*?\})", re.S)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=60).read()


def faces(css):
    """(subset, block) for each @font-face, commented or bare."""
    found = BLOCK.findall(css)
    if found:
        return found
    return [("fallback", block) for block in BARE.findall(css)]


def vendor(query, slug, keep):
    """Download one family's kept faces; return its rewritten @font-face blocks."""
    # An icon that paints late reads as a missing icon, so Symbols blocks.
    display = "block" if slug == "material-symbols" else "swap"
    css = fetch(f"https://fonts.googleapis.com/css2?family={query}&display={display}").decode()
    (FONTS / slug).mkdir(parents=True, exist_ok=True)
    out, seen = [], set()
    for subset, block in faces(css):
        if subset not in keep:
            continue
        url = re.search(r"url\((https://[^)]+)\)", block).group(1)
        weight = re.search(r"font-weight:\s*([^;]+);", block).group(1).strip().replace(" ", "-")
        style = re.search(r"font-style:\s*([^;]+);", block)
        # One family serves the same subset twice when it has italics; the
        # suffix is what keeps the two files apart.
        italic = "-italic" if style and style.group(1).strip() == "italic" else ""
        name = f"{slug}-{subset}-{weight}{italic}.woff2"
        if name in seen:
            continue
        seen.add(name)
        data = fetch(url)
        (FONTS / slug / name).write_bytes(data)
        out.append(f"/* {slug} — {subset}{italic} */\n"
                   + block.replace(url, f"./{slug}/{name}"))
        print(f"  {name:56s} {len(data)/1024:8.1f} KiB")
    return out


for filename, (blurb, families) in BUNDLES.items():
    print(f"\n== {filename} ==")
    blocks = []
    for query, slug, keep in families:
        blocks += vendor(query, slug, keep)
    header = (
        f"/* {blurb}\n"
        " *\n"
        " * Self-hosted, so the system makes no third-party request and nothing waits\n"
        " * on fonts.googleapis.com to paint. These are the woff2 files Google Fonts\n"
        " * serves. Regenerate with tools/fetch-fonts.py.\n"
        " */\n\n"
    )
    (FONTS / filename).write_text(header + "\n".join(blocks) + "\n", encoding="utf-8")
    print(f"  -> fonts/{filename}: {len(blocks)} face(s)")
