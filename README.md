# long2ip
PHP's long2ip in JavaScript.

Modified based on http://locutus.io/php/long2ip/.

## Features
- Simple
- Unit Testing
- No dependencies

## Example
```javascript
const long2ip = require('long2ip');

console.log(long2ip(3221234342)); // 192.0.34.166
console.log(long2ip(0)); // 0.0.0.0
console.log(long2ip(4294967295)); // 255.255.255.255

// negative, greater than 4294967295 or non-numbers resolve to false
console.log(long2ip(-1)); // false
console.log(long2ip(42949672950)); // false
console.log(long2ip('3221234342')); // false

// float will be rounded
console.log(long2ip(3221234342.1)); // 192.0.34.166
```

