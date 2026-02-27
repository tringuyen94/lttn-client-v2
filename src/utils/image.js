/**
 * Converts a full-size image path to its thumbnail counterpart.
 * Server stores thumbnails as `thumb-{original}` in the same directory.
 * Falls back to the original path if the input is falsy.
 */
export function getThumbnailPath(imagePath) {
  if (!imagePath) return imagePath;
  const lastSlash = imagePath.lastIndexOf('/');
  if (lastSlash === -1) return `thumb-${imagePath}`;
  const dir = imagePath.substring(0, lastSlash + 1);
  const filename = imagePath.substring(lastSlash + 1);
  return `${dir}thumb-${filename}`;
}
