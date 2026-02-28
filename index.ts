import { checkNumberPadding } from "./checkNumberPadding";

console.log(checkNumberPadding(["001", "002"]));         // 3
console.log(checkNumberPadding(["001", "002", "9999"])); // 3
console.log(checkNumberPadding(["1", "2", "999"]));      // 1
console.log(checkNumberPadding(["999", "9999"]));        // -3
console.log(checkNumberPadding(["99", "999", "9999"]));  // -2
console.log(checkNumberPadding(["01", "002"]));          // -1
console.log(checkNumberPadding([]));                     // 0
