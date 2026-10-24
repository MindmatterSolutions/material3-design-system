"""Sort the Material Symbols SVG dump on Drive into one flat folder per style.

    python3 tools/sort-material-icons.py [ICONS_DIR]

ICONS_DIR defaults to the Drive folder "Assets/Icons/Material Design". Its
Web/ subfolder holds the upstream layout -- Web/<name>/materialsymbols<style>/
with ~120 variants per icon (every weight, grade, fill and optical size). This
keeps one SVG per icon per style, written to ICONS_DIR/<Folder>/<name>.svg:

    Material Icons   outlined, FILL 1   (the filled baseline style)
    Outlined         outlined, FILL 0
    Round            rounded,  FILL 0
    Sharp            sharp,    FILL 0
    Two Tone         legacy Material Icons two-tone, 24px -- Material Symbols
                     has no two-tone style, so these come from upstream
                     google/material-design-icons src/ (a smaller, older set)

The variant kept is the default one (<name>_24px.svg / _fill1_24px.svg:
weight 400, grade 0, 24px optical size), the Material baseline and the one
that reads well at every size since the SVG scales from its viewBox. The root
<svg> gets fill="currentColor" so inline icons take the text colour.

Re-runnable: a file already written with the same content is skipped, and the
run ends by checking every folder holds exactly one SVG per icon.
"""
import pathlib, subprocess, sys

DEFAULT = pathlib.Path.home() / "Library/CloudStorage/GoogleDrive-nealldw@gmail.com/My Drive/Assets/Icons/Material Design"
ROOT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT
WEB = ROOT / "Web"

# Two Tone source: a sparse, blobless checkout of just the 24px two-tone SVGs,
# pinned to the same upstream commit as tools/fetch-symbols.py.
COMMIT = "737e3324305806514d7909874fa1818ae1808232"
UPSTREAM = "https://github.com/google/material-design-icons.git"
CACHE = pathlib.Path.home() / ".cache" / "material-design-icons-twotone"

STYLES = {  # folder -> (upstream style, filename suffix)
    "Material Icons": ("outlined", "_fill1_24px.svg"),
    "Outlined": ("outlined", "_24px.svg"),
    "Round": ("rounded", "_24px.svg"),
    "Sharp": ("sharp", "_24px.svg"),
}

def prepare(svg):
    if 'fill="' in svg.split(">", 1)[0]:
        return svg
    return svg.replace("<svg ", '<svg fill="currentColor" ', 1)

def twotone_sources():
    """{name: path} for every two-tone icon, fetching the checkout if needed."""
    git = lambda *a: subprocess.run(["git", "-C", str(CACHE), *a], check=True)
    head = CACHE / ".git" / "HEAD"
    if not head.is_file() or head.read_text().strip() != COMMIT:
        CACHE.mkdir(parents=True, exist_ok=True)
        if not (CACHE / ".git").is_dir():
            git("init", "-q")
            git("remote", "add", "origin", UPSTREAM)
        git("sparse-checkout", "set", "--no-cone", "/src/**/materialiconstwotone/24px.svg")
        git("fetch", "-q", "--depth", "1", "--filter=blob:none", "origin", COMMIT)
        git("checkout", "-q", "--detach", COMMIT)
    found = {}
    for p in sorted(CACHE.glob("src/*/*/materialiconstwotone/24px.svg")):
        found.setdefault(p.parent.parent.name, p)  # names are unique across categories
    return found

def sync(folder, sources):
    out = ROOT / folder
    out.mkdir(exist_ok=True)
    written = skipped = 0
    for name, src in sources.items():
        if src is None:
            problems.append(f"{folder}: no source for {name}")
            continue
        dest = out / f"{name}.svg"
        svg = prepare(src.read_text())
        if dest.is_file() and dest.read_text() == svg:
            skipped += 1
            continue
        dest.write_text(svg)
        written += 1
    have = {p.stem for p in out.glob("*.svg")}
    others = [p.name for p in out.iterdir() if p.suffix != ".svg" and p.name != ".DS_Store"]
    if have != set(sources) or others:
        problems.append(f"{folder}: {len(set(sources) - have)} missing, "
                        f"{len(have - set(sources))} extra, {len(others)} non-SVG")
    print(f"{folder:15} {len(have):5} icons  ({written} written, {skipped} unchanged)")

names = sorted(p.name for p in WEB.iterdir() if p.is_dir())
problems = []
for folder, (style, suffix) in STYLES.items():
    sources = {}
    for name in names:
        src = WEB / name / f"materialsymbols{style}" / f"{name}{suffix}"
        sources[name] = src if src.is_file() else None
    sync(folder, sources)
sync("Two Tone", twotone_sources())

if problems:
    print("\n".join(problems[:20]))
    sys.exit(1)
print(f"OK: {len(names)} icons in each of {len(STYLES)} Symbols folders, plus Two Tone")
