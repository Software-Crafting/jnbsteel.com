"""Refresh local CSS/JS URL hashes so cached Pages assets cannot mix releases."""
from hashlib import sha256
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parent.parent
# Match a complete attribute without requiring a particular following attribute.
ASSET = re.compile(r'((?:src|href)=")([^"?]+\.(?:css|js))(?:\?[^"#]*)?(")')


def stamp(page: Path) -> bool:
    original = page.read_text()

    def replace(match: re.Match) -> str:
        prefix, relative, suffix = match.groups()
        if relative.startswith(("https:", "http:", "//")):
            return match.group()
        asset = (page.parent / relative).resolve()
        if not asset.is_file() or not asset.is_relative_to(ROOT):
            raise ValueError(f"Missing or external asset in {page}: {relative}")
        version = sha256(asset.read_bytes()).hexdigest()[:12]
        return f"{prefix}{relative}?v={version}{suffix}"

    updated = ASSET.sub(replace, original)
    if updated != original:
        page.write_text(updated)
        return True
    return False


if __name__ == "__main__":
    pages = [ROOT / "index.html", ROOT / "map.html", *sorted((ROOT / "pages").glob("*.html"))]
    changed = sum(stamp(page) for page in pages)
    print(f"Stamped CSS/JS asset URLs on {changed} of {len(pages)} pages.")
