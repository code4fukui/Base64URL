# Base64URL

Base64URLエンコーディングとデコーディングの単純な実装です。

## 機能
- バイナリデータをBase64URL形式でエンコードおよびデコードできる
- 効率的で軽量
- パフォーマンステスト済み

## 使い方

```js
import { Base64URL } from "https://code4fukui.github.io/Base64URL/Base64URL.js";

const bin = new Uint8Array([1, 2, 3]);
const s = Base64URL.encode(bin);
console.log(s);
const bin2 = Base64URL.decode(s);
console.log(bin2);
```

## ライセンス
MIT License