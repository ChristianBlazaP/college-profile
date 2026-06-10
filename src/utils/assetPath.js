/**
 * Helper function to resolve public asset paths with basename support
 * Converts relative paths to absolute paths prefixed with the app's basename
 * 
 * @param {string} path - The asset path (e.g., '/assets/faculties/image.png')
 * @returns {string} - The full path with basename (e.g., '/college-profile/assets/faculties/image.png')
 */
export const getAssetPath = (path) => {
  const basename = '/college-profile';
  
  // If path already contains the basename, return as-is
  if (path.startsWith(basename)) {
    return path;
  }
  
  // If path starts with /, prepend basename
  if (path.startsWith('/')) {
    return `${basename}${path}`;
  }
  
  // Otherwise prepend both
  return `${basename}/${path}`;
};
