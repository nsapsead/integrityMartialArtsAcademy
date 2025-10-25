// Image extraction helper script
// Run this in the browser console on integritymartialartsacademy.com.au

console.log('=== Integrity Martial Arts Academy Image Extractor ===');

// Find all images on the page
const images = document.querySelectorAll('img');
const backgrounds = document.querySelectorAll('[style*="background-image"]');

console.log('Found', images.length, 'img tags');
console.log('Found', backgrounds.length, 'elements with background images');

// Extract image sources
const imageUrls = [];
images.forEach((img, index) => {
  if (img.src && !img.src.includes('data:')) {
    imageUrls.push({
      type: 'img',
      src: img.src,
      alt: img.alt || 'No alt text',
      index: index
    });
  }
});

// Extract background images
backgrounds.forEach((el, index) => {
  const style = el.style.backgroundImage;
  const urlMatch = style.match(/url\(['"]?(.*?)['"]?\)/);
  if (urlMatch && !urlMatch[1].includes('data:')) {
    imageUrls.push({
      type: 'background',
      src: urlMatch[1],
      alt: 'Background image',
      index: index
    });
  }
});

console.log('=== Image URLs Found ===');
imageUrls.forEach((img, i) => {
  console.log(`${i + 1}. [${img.type}] ${img.src}`);
  console.log(`   Alt: ${img.alt}`);
  console.log('');
});

// Copy to clipboard (if supported)
if (navigator.clipboard) {
  const urlsText = imageUrls.map(img => img.src).join('\n');
  navigator.clipboard.writeText(urlsText).then(() => {
    console.log('Image URLs copied to clipboard!');
  });
}

// Create download links
console.log('=== Download Links ===');
imageUrls.forEach((img, i) => {
  const link = document.createElement('a');
  link.href = img.src;
  link.download = `image-${i + 1}.jpg`;
  link.textContent = `Download ${img.alt || 'image'}`;
  link.style.display = 'block';
  link.style.margin = '5px 0';
  document.body.appendChild(link);
});
