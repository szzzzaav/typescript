"use strict";
// function add(a: number, b: number): number {
//   return a + b;
// }
// 函数的具体实现
function getInfo(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "string") {
        return `ID: ${param1}, Name: ${param2}`;
    }
    else if (typeof param1 === "number") {
        return `ID: ${param1}`;
    }
    else if (typeof param1 === "string") {
        return `Name: ${param1}`;
    }
    return "";
}
// 使用重载函数
console.log(getInfo(1)); // 输出: ID: 1
console.log(getInfo("Alice")); // 输出: Name: Alice
console.log(getInfo(1, "Alice")); // 输出: ID: 1, Name: Alices
