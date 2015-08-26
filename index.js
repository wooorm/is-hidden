/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module is-hidden
 * @fileoverview Check if `filePath` is hidden (starts with a dot).
 */

'use strict';

/* eslint-env commonjs */

/**
 * Check if `filePath` is hidden (starts with a dot).
 *
 * @param {string} filePath - File-path to check.
 * @return {boolean} - Whether `filePath` is hidden.
 * @throws {Error} - When `filePath` is not a string.
 */
function isHidden(filePath) {
    if (typeof filePath !== 'string') {
        throw new Error('Expected string');
    }

    return filePath.charAt(0) === '.';
}

module.exports = isHidden;
