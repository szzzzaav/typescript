"use strict";
// interface Axx {
//   name: string;
//   age: number;
// }
// // 注意不能多属性也不能少属性
Object.defineProperty(exports, "__esModule", { value: true });
const fn = (args) => {
    if (typeof args === "string")
        return false;
    if (typeof args === "boolean")
        return "123";
};
console.log(fn(" "), fn(false));
