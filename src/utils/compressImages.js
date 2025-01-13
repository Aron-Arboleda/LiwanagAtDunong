// import path from "path";
// import fs from "fs/promises";
// import imagemin from "imagemin";
// import imageminJpegoptim from "imagemin-jpegoptim";
// import imageminPngquant from "imagemin-pngquant";

// // Helper function to get all image files from the specified directory
// async function getAllImageFiles(dir) {
//   const entries = await fs.readdir(dir, { withFileTypes: true });
//   const files = await Promise.all(
//     entries.map(async (entry) => {
//       const fullPath = path.join(dir, entry.name);
//       return entry.isDirectory() ? getAllImageFiles(fullPath) : fullPath;
//     })
//   );
//   return files.flat().filter((file) => /\.(jpg|jpeg|png)$/i.test(file)); // Filter for image files
// }

// // Function to compress a single image file
// async function compressImage(imageFile) {
//   const normalizedImageFile = path.normalize(imageFile); // Normalize the path

//   // Compress image using imagemin
//   const result = await imagemin([normalizedImageFile], {
//     destination: path.dirname(normalizedImageFile),
//     plugins: [
//       imageminJpegoptim({ progressive: true, max: 80 }), // JPEG compression
//       imageminPngquant({ quality: [0.65, 0.8], speed: 3 }), // PNG compression
//     ],
//   });

//   // Replace the original file with the compressed one
//   if (result.length > 0) {
//     const compressedImage = result[0];
//     await fs.rename(compressedImage.destinationPath, normalizedImageFile); // Replace the original image with the compressed version
//     console.log(`Compressed and replaced: ${normalizedImageFile}`);
//   }
// }

// // Function to compress images in the specified directory or single file
// async function compressImages(inputPath) {
//   const stat = await fs.stat(inputPath);

//   if (stat.isDirectory()) {
//     // If inputPath is a directory, compress all images in the directory
//     const imageFiles = await getAllImageFiles(inputPath);
//     await Promise.all(imageFiles.map(compressImage));
//   } else if (stat.isFile()) {
//     // If inputPath is a file, compress that single image
//     await compressImage(inputPath);
//   } else {
//     console.log("Invalid path provided.");
//   }
// }

// // Example usage:
// // To compress a folder:
// compressImages(
//   path.join(
//     process.cwd(),
//     "src/assets/images/PageImages/LiteracyPage/AetaPeopleOnMuseum.png"
//   )
// );

// // Or, to compress a single image file:
// // compressImages(path.join(process.cwd(), "src/assets/images/single-image.jpg"));
