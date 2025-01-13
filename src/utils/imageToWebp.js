// import path from "path";
// import fs from "fs/promises";
// import crypto from "crypto";
// import imagemin from "imagemin";
// import imageminWebp from "imagemin-webp";

// const distImagesDirectory = path.join(
//   process.cwd(),
//   "src/assets/images/Graphics/DonorsGraphics"
// );
// const hashCacheFile = path.join(process.cwd(), "dist");

// async function getFileHash(filePath) {
//   const data = await fs.readFile(filePath);
//   return crypto.createHash("md5").update(data).digest("hex");
// }

// async function loadHashCache() {
//   try {
//     const cache = await fs.readFile(hashCacheFile, "utf8");
//     return JSON.parse(cache);
//   } catch (err) {
//     return {}; // Return an empty cache if file doesn't exist
//   }
// }

// async function saveHashCache(hashCache) {
//   await fs.writeFile(hashCacheFile, JSON.stringify(hashCache, null, 2), "utf8");
// }

// async function getAllImageFiles(dir) {
//   const entries = await fs.readdir(dir, { withFileTypes: true });
//   const files = await Promise.all(
//     entries.map(async (entry) => {
//       const fullPath = path.join(dir, entry.name);
//       return entry.isDirectory() ? getAllImageFiles(fullPath) : fullPath;
//     })
//   );
//   return files.flat().filter((file) => /\.(jpg|jpeg|png)$/i.test(file));
// }

// async function convertImagesToWebP() {
//   const hashCache = await loadHashCache();
//   const newHashCache = {};
//   const imageFiles = await getAllImageFiles(distImagesDirectory);

//   await Promise.all(
//     imageFiles.map(async (imageFile) => {
//       const currentHash = await getFileHash(imageFile);
//       newHashCache[imageFile] = currentHash;

//       // Skip optimization if the hash hasn't changed
//       if (hashCache[imageFile] === currentHash) {
//         console.log(`Skipping unchanged file: ${imageFile}`);
//         return;
//       }

//       const outputPath = path.join(
//         path.dirname(imageFile),
//         path.basename(imageFile, path.extname(imageFile)) + ".webp"
//       );

//       const result = await imagemin([imageFile], {
//         destination: path.dirname(imageFile),
//         plugins: [imageminWebp({ quality: 75 })],
//       });

//       console.log(`Optimized and converted: ${imageFile}`);
//     })
//   );

//   await saveHashCache(newHashCache);
// }

// // Run the conversion
// convertImagesToWebP();
