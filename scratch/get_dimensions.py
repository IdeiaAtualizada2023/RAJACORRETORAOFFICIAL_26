import os
from PIL import Image

img_dir = '_imagens'
for filename in os.listdir(img_dir):
    if filename.endswith(('.webp', '.png', '.jpg', '.jpeg')):
        try:
            with Image.open(os.path.join(img_dir, filename)) as img:
                width, height = img.size
                print(f"{filename}: {width}x{height}")
        except Exception as e:
            print(f"Error reading {filename}: {e}")
