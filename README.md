# Base64URL
 
```js
import { Base64URL } from "https://code4fukui.github.io/Base64URL/Base64URL.js";

const bin = new Uint8Array([1, 2, 3]);
const s = Base64URL.encode(bin);
console.log(s);
const bin2 = Base64URL.decode(s);
console.log(bin2);
```
