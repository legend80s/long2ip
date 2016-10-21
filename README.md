# long2ip
PHP's long2ip in JavaScript

modified based on http://locutus.io/php/long2ip/

## Example
```javascript
const long2ip = require('long2ip');

console.log(long2ip(3221234342)); // 192.0.34.166
console.log(long2ip(0)); // 0.0.0.0
console.log(long2ip(4294967295)); // 255.255.255.255
```
