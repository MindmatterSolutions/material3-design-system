"""Re-vendor the design system's web fonts.

Fetches each family from the Google Fonts css2 API, keeps the subsets in KEEP,
writes the .woff2 files under fonts/<family>/ and regenerates fonts/fonts.css
with local paths. Idempotent: re-running replaces what is there.

    python3 tools/fetch-fonts.py

Widen KEEP to vendor more subsets (cyrillic, greek, vietnamese); the repo ships
latin and latin-ext only. Roboto Flex and Inter are requested as variable faces
so their axes survive -- the theme drives Roboto Flex's wdth axis, which a
static build would silently drop.
"""
import re, urllib.request, pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent   # repo root
FONTS = OUT / "fonts"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")

# family -> (css2 query, local dir slug)
FAMILIES = [
    ("Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000", "roboto-flex"),
    ("IBM+Plex+Mono:wght@400;500;600;700",                  "ibm-plex-mono"),
    ("Inter:wght@400..800",                                 "inter"),
]
KEEP = {"latin", "latin-ext"}          # subsets we vendor

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=60).read()

BLOCK = re.compile(r"/\*\s*([a-z0-9-]+)\s*\*/\s*(@font-face\s*\{.*?\})", re.S)
blocks_out = []

for query, slug in FAMILIES:
    css = fetch(f"https://fonts.googleapis.com/css2?family={query}&display=swap").decode()
    (FONTS / slug).mkdir(parents=True, exist_ok=True)
    kept = 0
    for subset, block in BLOCK.findall(css):
        if subset not in KEEP:
            continue
        url = re.search(r"url\((https://[^)]+)\)", block).group(1)
        weight = re.search(r"font-weight:\s*([^;]+);", block).group(1).strip()
        wtag = weight.replace(" ", "-")
        name = f"{slug}-{subset}-{wtag}.woff2"
        data = fetch(url)
        (FONTS / slug / name).write_bytes(data)
        local = block.replace(url, f"./{slug}/{name}")
        blocks_out.append(f"/* {slug} \u2014 {subset} */\n{local}")
        kept += 1
        print(f"{name:52s} {len(data)/1024:8.1f} KiB")
    print(f"  -> {slug}: {kept} face(s)\n")

hdr = """/* Self-hosted web fonts for the Material 3 Expressive design system.
 *
 * Replaces the Google Fonts @import the theme used to carry, so the system
 * renders with no third-party request and no layout shift waiting on one.
 * Faces are the woff2 files Google Fonts serves, latin and latin-ext subsets
 * only; every other subset (cyrillic, greek, vietnamese) is left out.
 *
 * Roboto Flex is the Expressive sans and carries all three axes the theme
 * drives: opsz 8..144, wdth 25..151, wght 100..1000. IBM Plex Mono stays for
 * figures and instrument readouts, where tabular digits are the job. Inter is
 * the fallback behind Roboto Flex in --font-sans.
 *
 * Regenerate with tools/fetch-fonts.py.
 */

"""
(FONTS / "fonts.css").write_text(hdr + "\n".join(blocks_out) + "\n", encoding="utf-8")
print("wrote fonts/fonts.css with", len(blocks_out), "faces")
