#!/usr/bin/env python3
"""รวม index.html + css + js เป็นไฟล์เดียว: dist/bubble-woods.html
ใช้เมื่ออยากส่งเกมเป็นไฟล์เดียว หรือเปิดในตัวพรีวิวที่โหลดไฟล์ข้างเคียงไม่ได้"""
import re, pathlib

root = pathlib.Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")

def inline_css(m):
    return "<style>\n" + (root / m.group(1)).read_text(encoding="utf-8") + "\n</style>"

def inline_js(m):
    return "<script>\n" + (root / m.group(1)).read_text(encoding="utf-8") + "\n</script>"

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', inline_css, html)
html = re.sub(r'<script src="([^"]+)"></script>', inline_js, html)

out = root / "dist" / "bubble-woods.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print("built", out, len(html), "bytes")
