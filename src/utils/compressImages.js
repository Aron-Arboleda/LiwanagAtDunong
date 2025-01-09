import path from "path";
import fs from "fs/promises";
import crypto from "crypto";
import imagemin from "imagemin";
import imageminJpegoptim from "imagemin-jpegoptim";
import imageminPngquant from "imagemin-pngquant";

const distImagesDirectory = path.join(process.cwd(), "dist/assets");
const hashCacheFile = path.join(process.cwd(), "image-cache.json");

async function getFileHash(filePath) {
  const data = await fs.readFile(filePath);
  return crypto.createHash("md5").update(data).digest("hex");
}

async function loadHashCache() {
  try {
    const cache = await fs.readFile(hashCacheFile, "utf8");
    return JSON.parse(cache);
  } catch (err) {
    return {}; // Return an empty cache if file doesn't exist
  }
}

async function saveHashCache(hashCache) {
  await fs.writeFile(hashCacheFile, JSON.stringify(hashCache, null, 2), "utf8");
}

async function getAllImageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? getAllImageFiles(fullPath) : fullPath;
    })
  );
  return files.flat().filter((file) => /\.(jpg|jpeg|png)$/i.test(file));
}

async function compressImages() {
  const hashCache = await loadHashCache();
  const newHashCache = {};
  const imageFiles = await getAllImageFiles(distImagesDirectory);

  await Promise.all(
    imageFiles.map(async (imageFile) => {
      const currentHash = await getFileHash(imageFile);
      newHashCache[imageFile] = currentHash;

      // Skip optimization if the hash hasn't changed
      if (hashCache[imageFile] === currentHash) {
        console.log(`Skipping unchanged file: ${imageFile}`);
        return;
      }

      // Compress image using imagemin
      const result = await imagemin([imageFile], {
        destination: path.dirname(imageFile),
        plugins: [
          imageminJpegoptim({ progressive: true, max: 80 }), // JPEG compression
          imageminPngquant({ quality: [0.65, 0.8], speed: 3 }), // PNG compression
        ],
      });

      // Replace the original file with the compressed one
      if (result.length > 0) {
        await fs.rename(result[0].destinationPath, imageFile);
        console.log(`Compressed and replaced: ${imageFile}`);
      }
    })
  );

  await saveHashCache(newHashCache);
}

// Run the compression
compressImages();
