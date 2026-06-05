/**
 * Image Validator Utility
 * Filters facility images to only include those that actually exist
 */

export const validImageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

/**
 * Filter valid images from a facility's image array
 * Only returns images that exist in the public/assets/facilities folder
 */
export const filterValidImages = (images) => {
  if (!Array.isArray(images)) return [];
  
  // Map of existing images in the facilities folder
  const existingImages = new Set([
    // Automotive
    'automotive1.jpg', 'automotive2.jpg', 'automotive3.jpg', 'automotive4.jpg',
    // Mechanical
    'mecanical1.jpg', 'mecanical2.jpg', 'mecanical3.jpg', 'mecanical4.jpg',
    // Electrical
    'electrical1.png', 'electrical2.png', 'electrical3.png', 'electrical4.png',
    // Electronics
    'electronics1.jpg', 'electronics2.jpg', 'electronics3.jpg', 'electronics4.jpg',
    // Drafting
    'drafting1.jpg', 'drafting2.jpg', 'drafting3.jpg', 'drafting4.jpg',
    // Computer
    'comp1.jpg', 'comp2.jpg', 'comp3.jpg', 'comp4.jpg',
    // Chemistry
    'chemistry1.png', 'chemistry2.png', 'chemistry3.png', 'chemistry4.png',
    // Apparel & Fashion
    'F&A1.jpg', 'F&A2.jpg', 'F&A3.jpg', 'F&A4.jpg',
    // HVAC-R
    'HVAC-R1.jpg', 'HVAC-R2.jpg', 'HVAC-R3.jpg', 'HVAC-R4.jpg',
    // Food Trades
    'Ftech1.jpg', 'Ftech2.jpg', 'Ftech3.jpg', 'Ftech4.jpg',
  ]);

  return images.filter(imagePath => {
    // Extract filename from path
    const filename = imagePath.split('/').pop();
    return existingImages.has(filename);
  });
};

/**
 * Get a valid image from facility images, with fallback support
 */
export const getValidImage = (images, index = 0) => {
  const validImages = filterValidImages(images);
  
  if (validImages.length === 0) {
    return null; // No valid images available
  }
  
  return validImages[index % validImages.length];
};

/**
 * Check if a facility has valid images
 */
export const hasValidImages = (images) => {
  return filterValidImages(images).length > 0;
};
