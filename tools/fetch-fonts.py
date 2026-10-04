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
 * Roboto is baseline M3's own typeface -- what md.ref.typeface.plain and
 * .brand resolve to -- and is a different family from the theme's Roboto Flex,
 * so both are vendored rather than one standing in for the other.
 *
 * Material Symbols Outlined, the icon font, is NOT here yet. Google Fonts
 * serves it as one 'fallback' block covering every icon, which is 3.9 MB --
 * too much to hand a browser, and too much to carry in the repo, for the
 * handful of glyphs the components actually use. It wants a subset pass
 * against the real icon list first; see MATERIAL_SYMBOLS below.""",
        [
            ("Roboto:ital,wght@0,100..900;1,100..900", "roboto", LATIN),
        ],
    ),
}

# The icon font, pending a subset. Google Fonts takes an `icon_names=` list and
# serves only those glyphs, which turns 3.9 MB into a few KiB. Fill this in with
# the icons baseline/ actually references (grep its components for the ligature
# names), add it to the baseline bundle above, and re-run. It keeps subset
# {"fallback"} -- Symbols is served as one block, not per-script -- and
# font-display:block, because a half-drawn icon reads as a missing one.
MATERIAL_SYMBOLS = (
    "Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    "material-symbols",
    {"fallback"},
)
MATERIAL_SYMBOLS_ICONS: list[str] = []   # e.g. ["home", "settings", "search"]

BLOCK = re.compile(r"/\*\s*([a-z0-9-]+)\s*\*/\s*(@font-face\s*\{.*?\})", re.S)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=60).read()


def vendor(query, slug, keep):
    """Download one family's kept faces; return its rewritten @font-face blocks."""
    # An icon that paints late reads as a missing icon, so Symbols blocks.
    display = "block" if slug == "material-symbols" else "swap"
    css = fetch(f"https://fonts.googleapis.com/css2?family={query}&display={display}").decode()
    (FONTS / slug).mkdir(parents=True, exist_ok=True)
    out, seen = [], set()
    for subset, block in BLOCK.findall(css):
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
