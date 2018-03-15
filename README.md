# mooch-calc

> Convert days to Mooches

[![Travis](https://img.shields.io/travis/gakimball/mooch-calc.svg?maxAge=2592000)](https://travis-ci.org/gakimball/mooch-calc) [![npm](https://img.shields.io/npm/v/mooch-calc.svg?maxAge=2592000)](https://www.npmjs.com/package/mooch-calc)

## Installation

```bash
npm install mooch-calc
```

## Usage

```js
const moochCalc = require('mooch-calc');

moochCalc(10); // => 1
moochCalc(145); // => 14.5
```

## API

### moochCalc(days)

Convert days to [Mooches](https://en.wikipedia.org/wiki/List_of_humorous_units_of_measurement#Mooch).

- **days** (Number) - Number of days to convert.

Returns a number or float.

## CLI

```
Usage
  $ mooch <days>

Example
  $ mooch 31
  31 days is 3.1 Mooches
```

## Local Development

```bash
git clone https://github.com/gakimball/mooch-calc
cd mooch-calc
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
