export function isHidden(filename) {
  if (typeof filename !== 'string') {
    throw new TypeError('Expected string')
  }

  return filename.charAt(0) === '.'
}
