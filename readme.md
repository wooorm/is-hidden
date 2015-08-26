# is-hidden [![Build Status](https://img.shields.io/travis/wooorm/is-hidden.svg?style=flat)](https://travis-ci.org/wooorm/is-hidden) [![Coverage Status](https://img.shields.io/coveralls/wooorm/is-hidden.svg?style=flat)](https://coveralls.io/r/wooorm/is-hidden?branch=master)

Check whether `filename` is hidden (starts with a dot).

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install is-hidden
```

**is-hidden** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), [duo](http://duojs.org/#getting-started),
and for AMD, CommonJS, and globals ([uncompressed](is-hidden.js) and
[compressed](is-hidden.min.js)).

## Usage

```js
var isHidden = require('is-hidden');

isHidden('.git'); // true
isHidden('readme.md'); // false
```

## API

### isHidden(filename)

Check whether `filename` is hidden (starts with a dot).

**Parameters**

*   `filename` (`string`) — File-path to check.

**Returns**

`boolean` — Whether `filename` is hidden.

**Throws**

*   `Error` — When `filename` is not a string.

## License

[MIT](LICENSE) @ [Titus Wormer](http://wooorm.com)
