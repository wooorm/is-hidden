# is-hidden

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Tiny package that checks if a basename (`.gitignore`, `example.js`) is
hidden (starts with a dot).

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`isHidden(basename)`](#ishiddenbasename)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

Tiny package that checks if a basename is hidden.

## When should I use this?

Probably not, you can do check this yourself.
I was doing this so many times that I made it a package years ago.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install is-hidden
```

In Deno with [`esm.sh`][esmsh]:

```js
import {isHidden} from 'https://esm.sh/is-hidden@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {isHidden} from 'https://esm.sh/is-hidden@2?bundle'
</script>
```

## Use

```js
import {isHidden} from 'is-hidden'

isHidden('.git') // => true
isHidden('readme.md') // => false
```

## API

This package exports the identifier `isHidden`.
There is no default export.

### `isHidden(basename)`

Check if `basename` is hidden (starts with a dot).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/is-hidden/workflows/main/badge.svg

[build]: https://github.com/wooorm/is-hidden/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/is-hidden.svg

[coverage]: https://codecov.io/github/wooorm/is-hidden

[downloads-badge]: https://img.shields.io/npm/dm/is-hidden.svg

[downloads]: https://www.npmjs.com/package/is-hidden

[size-badge]: https://img.shields.io/bundlephobia/minzip/is-hidden.svg

[size]: https://bundlephobia.com/result?p=is-hidden

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com
