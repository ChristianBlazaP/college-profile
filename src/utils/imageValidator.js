/**
 * Image Validator Utility
 *
 * Now that all facility images are bundled by Vite (not public-folder strings),
 * the image values in facilityLabsData are already resolved URLs/blob URLs.
 * These helpers simply ensure the array is non-empty and truthy.
 */

/**
 * Filter valid (truthy) images from a facility's image array.
 * @param {string[]} images - Array of image src values (Vite-bundled URLs)
 * @returns {string[]} - Only the truthy entries
 */
export const filterValidImages = (images) => {
  if (!Array.isArray(images)) return [];
  return images.filter(Boolean);
};

/**
 * Get a specific valid image by index, with wrap-around.
 * @param {string[]} images
 * @param {number} index
 * @returns {string|null}
 */
export const getValidImage = (images, index = 0) => {
  const valid = filterValidImages(images);
  if (valid.length === 0) return null;
  return valid[index % valid.length];
};

/**
 * Check whether a facility has at least one valid image.
 * @param {string[]} images
 * @returns {boolean}
 */
export const hasValidImages = (images) => filterValidImages(images).length > 0;
