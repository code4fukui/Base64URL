import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

class Base64URL {
  static encode(bin) {
    let s = Base64.encode(bin);
    s = s.replace(/=/g, ""); // Remove any trailing '='s
    s = s.replace(/\+/g, "-"); // 62nd char of encoding
    s = s.replace(/\//g, "_"); // 63rd char of encoding
    return s;
  }
  static decode(s) {
    s = s.replace(/-/g, "+"); // 62nd char of encoding
    s = s.replace(/_/g, "/"); // 63rd char of encoding
    switch (s.length % 4) { // Pad with trailing '='s
      case 0:
        break; // No pad chars in this case
      case 2:
        s += "==";
        break; // Two pad chars
      case 3:
        s += "=";
        break; // One pad char
      default:
        throw new Error("Illegal base64url string!");
    }
    return Base64.decode(s);
  }
}

export { Base64URL };
