# Lodash Loader

[![NPM](https://img.shields.io/npm/v/unicode-regex-loader.svg)](https://www.npmjs.com/package/unicode-regex-loader)
[![Greenkeeper badge](https://badges.greenkeeper.io/code-chris/unicode-regex-loader.svg)](https://greenkeeper.io/)


Transforms unicode regular expressions to valid ES5 regular expressions.


## Installation

```
npm install unicode-regex-loader
```


## Usage

Add this to your webpack.config.js to apply the logic to your `.js` files, for example.

```js
module.exports = {
  ...
  module: {
    rules: [
	    { test: /\.js$/, loader: "babel-loader!unicode-regex-loader" }
	  ]
  }
  ...
};
```


[License](https://github.com/code-chris/unicode-regex-loader/blob/master/LICENSE)
------
