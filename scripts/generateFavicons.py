import os
from PIL import Image, ImageDraw

src_path = "public/images/kartik-chavhan.jpg"
if not os.path.exists(src_path):
    print("Source image not found:", src_path)
    exit(1)

# Open image and convert to RGBA
img = Image.open(src_path).convert("RGBA")
width, height = img.size

# The image is a 1024x1024 square with a black border outside the circular portrait.
# We'll create a circular mask with anti-aliasing so corners are transparent.
# To make it extra crisp on small favicons, let's create a high-res mask.
mask = Image.new("L", (width * 2, height * 2), 0)
draw = ImageDraw.Draw(mask)
# The inner circle touches close to the edge. Let's make a circle.
# Let's check circle bounds:
draw.ellipse((8, 8, width * 2 - 8, height * 2 - 8), fill=255)
mask = mask.resize((width, height), Image.Resampling.LANCZOS)

# Create circular portrait image with alpha transparency outside
circular_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
circular_img.paste(img, (0, 0), mask=mask)

# Also let's add a very subtle high-contrast cyan/emerald thin border so it pops on dark or light tabs!
border_mask = Image.new("RGBA", (width, height), (0, 0, 0, 0))
border_draw = ImageDraw.Draw(border_mask)
border_draw.ellipse((4, 4, width - 4, height - 4), outline=(6, 182, 212, 220), width=6)
circular_img = Image.alpha_composite(circular_img, border_mask)

# Save high-res PNG
circular_img.save("public/favicon-512x512.png", "PNG")
circular_img.resize((192, 192), Image.Resampling.LANCZOS).save("public/favicon-192x192.png", "PNG")
circular_img.resize((180, 180), Image.Resampling.LANCZOS).save("public/apple-touch-icon.png", "PNG")
circular_img.resize((64, 64), Image.Resampling.LANCZOS).save("public/favicon-64x64.png", "PNG")
circular_img.resize((32, 32), Image.Resampling.LANCZOS).save("public/favicon-32x32.png", "PNG")
circular_img.resize((16, 16), Image.Resampling.LANCZOS).save("public/favicon-16x16.png", "PNG")
circular_img.resize((32, 32), Image.Resampling.LANCZOS).save("public/favicon.png", "PNG")

# Save multi-size favicon.ico
ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
circular_img.save("public/favicon.ico", format="ICO", sizes=ico_sizes)

# Also generate favicon.svg embedding the image as a circular clipped data-uri
import base64
with open("public/favicon-64x64.png", "rb") as f:
    b64_data = base64.b64encode(f.read()).decode("utf-8")

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <clipPath id="circleClip">
      <circle cx="32" cy="32" r="30" />
    </clipPath>
  </defs>
  <circle cx="32" cy="32" r="31" fill="#06090e" stroke="#06b6d4" stroke-width="2"/>
  <image href="data:image/png;base64,{b64_data}" x="2" y="2" width="60" height="60" clip-path="url(#circleClip)" />
</svg>
'''
with open("public/favicon.svg", "w", encoding="utf-8") as f:
    f.write(svg_content)

print("Successfully generated all favicon assets from Kartik's photo!")
