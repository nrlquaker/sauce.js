# sauce.js

[![Build Status](https://travis-ci.com/nrlquaker/sauce.js.svg?branch=master)](https://travis-ci.com/nrlquaker/sauce.js)

sauce.js is [SAUCE](http://www.acid.org/info/sauce/sauce.htm) parser for Node.js

## Installation

`npm install sauce.js`

## Usage

```typescript
const sp = new SauceParser()
const result = sp.parse('/path/to/file.ans')
console.log(result)
```

## License

sauce.js is released under the [MIT License](https://github.com/nrlquaker/sauce.js/blob/master/LICENSE)
