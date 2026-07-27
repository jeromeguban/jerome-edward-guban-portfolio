#!/usr/bin/env python3
"""Pack the avatar theme-transition frames into a single sprite sheet.

Source frames live in public/images/avatar-transition/ as 3375x4219 RGBA PNGs
(~4 MB each). Swapping them at runtime is far too heavy, so this bakes them
into one WebP sheet that the browser decodes exactly once, plus two full
quality "rest" images for the states the hero holds indefinitely.

Run once, commit the outputs, then the source frames can be removed:

    python3 scripts/build-avatar-sprite.py

Requires Pillow with WebP support.
"""

import re
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "public" / "images" / "avatar-transition"
OUT_DIR = ROOT / "public" / "images"

SRC_SIZE = (3375, 4219)

# Sheet geometry. 39 frames at 440x550 gives a 3520x2750 sheet, comfortably
# under the 4096px texture limit on both axes. The last grid slot is unused.
FRAME_W, FRAME_H = 440, 550
COLS, ROWS = 8, 5

REST_W, REST_H = 1400, 1750


def frame_paths():
    """Source frames in ascending numeric order (1, 3, 4, ... 40).

    Sorted by int, not lexicographically -- otherwise 10 would land before 3
    and the sheet would play out of order.
    """
    paths = []
    for path in SRC_DIR.glob("*.png"):
        match = re.fullmatch(r"\d+", path.stem)
        if match:
            paths.append((int(path.stem), path))
    paths.sort(key=lambda pair: pair[0])
    return paths


def main():
    frames = frame_paths()
    if not frames:
        sys.exit(f"no numbered frames found in {SRC_DIR}")

    if len(frames) > COLS * ROWS:
        sys.exit(f"{len(frames)} frames do not fit a {COLS}x{ROWS} grid")

    sheet = Image.new("RGBA", (FRAME_W * COLS, FRAME_H * ROWS), (0, 0, 0, 0))

    for index, (number, path) in enumerate(frames):
        with Image.open(path) as image:
            if image.size != SRC_SIZE:
                sys.exit(
                    f"{path.name} is {image.size}, expected {SRC_SIZE} -- "
                    "a mismatched frame would desync the grid"
                )
            frame = image.convert("RGBA").resize((FRAME_W, FRAME_H), Image.LANCZOS)

        col, row = index % COLS, index // COLS
        sheet.paste(frame, (col * FRAME_W, row * FRAME_H))
        print(f"  slot {index:>2} (col {col}, row {row})  <- {number}.png")

    sheet_path = OUT_DIR / "avatar-sprite.webp"
    sheet.save(sheet_path, "WEBP", quality=80, method=6)

    # Rest states: the frames the hero holds between transitions, so these stay
    # full quality. First frame = dark (no sunglasses), last = light.
    rest = {
        "avatar-rest-dark.webp": frames[0],
        "avatar-rest-light.webp": frames[-1],
    }
    for name, (number, path) in rest.items():
        with Image.open(path) as image:
            resized = image.convert("RGBA").resize((REST_W, REST_H), Image.LANCZOS)
        resized.save(OUT_DIR / name, "WEBP", quality=85, method=6)
        print(f"  {name} <- {number}.png")

    print()
    print(f"frames : {len(frames)}")
    print(f"grid   : {COLS}x{ROWS}  sheet {sheet.width}x{sheet.height}")
    for name in ["avatar-sprite.webp", *rest]:
        size = (OUT_DIR / name).stat().st_size
        print(f"{name:<24} {size / 1024:.0f} KB")


if __name__ == "__main__":
    main()
