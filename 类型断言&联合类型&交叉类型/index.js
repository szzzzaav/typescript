"use strict";
// 联合类型
let number = "123";
const xx = (man) => {
    console.log(man);
};
console.log(xx({ name: "123", age: 12, sex: "man" }));
// 类型断言
let fn = function (num) {
    console.log(num.length);
    console.log(num.length);
};
fn("123");
// globalThis = "123"; 错误
globalThis.abc = "123";
