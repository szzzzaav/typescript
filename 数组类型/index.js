"use strict";
// number[]
let arr1 = [1, 2, 4, 4, 5];
// 泛型
let arr2 = [1, 3, 4, 5];
let arr3 = [{ name: "1" }, { name: "2" }];
// 二维数组
let arr4 = [[1], [2], [3]];
// 元组
let arr5 = [1, {}, "123"];
function a(...args) {
    let a = arguments;
    // arguments不是数组
    // let b: A = arguments;
}
// IArguments原理
// interface A {
//   callee: Function;
//   length: number;
//   [index: number]: any;
// }
