/**
 * Check if `basename` is hidden (starts with a dot).
 *
 * @param {string} basename
 *   Filename (not a whole path, just one file or folder).
 * @returns {boolean}
 *   Whether `basename` is hidden.
 */
export function isHidden(basename) {
  if (typeof basename !== 'string') {
    throw new TypeError('Expected string')
  }

  return basename.charAt(0) === '.'
}
