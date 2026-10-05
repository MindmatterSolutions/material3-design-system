"""Vendor the full Material Symbols variable fonts from google/material-design-icons.

    python3 tools/fetch-symbols.py

fonts/material-symbols/ holds a 67-icon subset of the Rounded style for the
repo's own pages (tools/fetch-fonts.py). This fetches the complete fonts --
every icon, all four axes (FILL, GRAD, opsz, wght) -- in all three styles,
for the React package and the Claude Design sync, where a design may name any
icon:

    fonts/material-symbols-full/material-symbols-rounded.woff2    (default)
    fonts/material-symbols-full/material-symbols-outlined.woff2
    fonts/material-symbols-full/material-symbols-sharp.woff2

plus each style's .codepoints (the icon-name index) and the Apache-2.0 licence.
Pinned to one upstream commit so a re-run is reproducible; bump COMMIT to update.
"""
import pathlib, urllib.parse, urllib.request

COMMIT = "737e3324305806514d7909874fa1818ae1808232"
REPO = "https://raw.githubusercontent.com/google/material-design-icons"
OUT = pathlib.Path(__file__).resolve().parent.parent / "fonts" / "material-symbols-full"

def fetch(path, dest):
    url = f"{REPO}/{COMMIT}/{urllib.parse.quote(path)}"
    with urllib.request.urlopen(url) as r:
        dest.write_bytes(r.read())
    print(f"  {dest.name:42} {dest.stat().st_size / 1024:8.1f} KiB")

OUT.mkdir(parents=True, exist_ok=True)
for style in ("Rounded", "Outlined", "Sharp"):
    src = f"variablefont/MaterialSymbols{style}[FILL,GRAD,opsz,wght]"
    fetch(f"{src}.woff2", OUT / f"material-symbols-{style.lower()}.woff2")
    fetch(f"{src}.codepoints", OUT / f"material-symbols-{style.lower()}.codepoints")
fetch("LICENSE", OUT / "LICENSE.txt")
