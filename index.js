/**
 * Check if `basename` is hidden (starts with a dot).
 *
 * @param {string} basename Filename
 * @returns {boolean} Whether `basename` is hidden.
 */
export function isHidden(basename) {
  if (typeof basename !== 'string') {
    throw new TypeError('Expected string')
  }

  return basename.charAt(0) === '.'
}
