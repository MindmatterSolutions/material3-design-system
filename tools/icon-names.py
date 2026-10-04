"""Print the Material Symbols ligatures baseline/ actually uses.

The icon font is vendored as a subset, so the list in fetch-fonts.py has to
match the markup. Run this after adding or removing an icon in baseline/ and
paste the output into MATERIAL_SYMBOLS_ICONS, then re-run fetch-fonts.py.

    python3 tools/icon-names.py

An icon left out of the list renders as its literal ligature text ("home"),
which is the tell that the two have drifted apart.
"""
import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "baseline"

# <span class="md-icon …">ligature</span> -- the only way an icon is written.
PATTERN = re.compile(r'class="md-icon[^"]*"[^>]*>([a-z0-9_]+)<')

names = set()
for page in ROOT.rglob("*.html"):
    names |= set(PATTERN.findall(page.read_text(encoding="utf-8")))

names = sorted(names)
print(f"# {len(names)} icons")
for i in range(0, len(names), 6):
    print("    " + ", ".join(f'"{n}"' for n in names[i:i + 6]) + ",")
