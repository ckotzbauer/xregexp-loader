# XRegexp Loader

# Not actively maintained

[![NPM](https://img.shields.io/npm/v/xregexp-loader.svg)](https://www.npmjs.com/package/xregexp-loader)


Transforms XRegexp constructor calls to valid ES5 regular expressions.


## Installation

```
npm install xregexp-loader
```


## Usage

Add this to your webpack.config.js to apply the logic to your `.js` files, for example.

```js
module.exports = {
  ...
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader!xregexp-loader" }
    ]
  }
  ...
};
```


[License](https://github.com/code-chris/xregexp-loader/blob/master/LICENSE)
------
