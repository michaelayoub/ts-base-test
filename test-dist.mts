// test-dist.mts
import { add, greet, getSecureRandomId } from "./dist/index.js";
console.log(add(2, 3));      // 5
console.log(greet("Ada"));   // Hello, Ada.
console.log(getSecureRandomId()); // timestamp-randomid