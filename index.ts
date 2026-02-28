import { checkNumberPadding } from "./checkNumberPadding";

console.log(checkNumberPadding(["001", "002"]));         // 3
console.log(checkNumberPadding(["001", "002", "9999"])); // 3
console.log(checkNumberPadding(["1", "2", "999"]));      // 1
console.log(checkNumberPadding(["999", "9999"]));        // -3
console.log(checkNumberPadding(["99", "999", "9999"]));  // -2
console.log(checkNumberPadding(["01", "002"]));          // -1
console.log(checkNumberPadding([]));                     // 0
console.log(checkNumberPadding(["0"]));                  // -1
console.log(checkNumberPadding(["99","98","97"]));       // -2
console.log(checkNumberPadding(["abc","12","097"]));     // 0
console.log(checkNumberPadding(["00"]));        // -2
console.log(checkNumberPadding(["0000"]));      // -4
console.log(checkNumberPadding(["5"]));         // -1
console.log(checkNumberPadding(["0005"]));      // -4
console.log(checkNumberPadding(["0","0"]));         // 1
console.log(checkNumberPadding(["00","00"]));       // 2
console.log(checkNumberPadding(["0","00","000"]));  // -1
console.log(checkNumberPadding(["0","01"]));     // 2
console.log(checkNumberPadding(["0","10"]));     // 1
console.log(checkNumberPadding(["00","10"]));    // 2
console.log(checkNumberPadding(["0001","0002","10000"])); // 4
console.log(checkNumberPadding(["01","02","003"]));       // -1
console.log(checkNumberPadding(["00000001","00000002"])); // 8
console.log(checkNumberPadding(["10","20","30"]));       // -2
console.log(checkNumberPadding(["100","200","300"]));    // -3
console.log(checkNumberPadding(["9","10","11"]));        // 1
console.log(checkNumberPadding(["90","100","110"]));     // -2
console.log(checkNumberPadding(["-01","02"]));     // 0
console.log(checkNumberPadding(["1.2","03"]));     // 0
console.log(checkNumberPadding([" 01","02"]));     // 0
console.log(checkNumberPadding(["01","02",""]));   // 0
console.log(checkNumberPadding(["01","01","01"]));  // 2
console.log(checkNumberPadding(["99","99","99"]));  // -2
console.log(checkNumberPadding(["001","002","0003"])); // -1 (strict rule)
console.log(checkNumberPadding(["09","10"]));          // 2
