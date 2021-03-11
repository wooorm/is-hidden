# is-hidden

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if `basename` is hidden (starts with a dot).

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install is-hidden
```

## Use

```js
import {isHidden} from 'is-hidden'

isHidden('.git') // => true
isHidden('readme.md') // => false
```

## API

This package exports the following identifiers: `isHidden`.
There is no default export.

### `isHidden(basename)`

Check if `basename` is hidden (starts with a dot).

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

[license]: license

[author]: https://wooorm.com
