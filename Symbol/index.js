"use strict";
let a1 = Symbol(1);
let a2 = Symbol(1);
console.log(a1 === a2); //false
// for会在全局的范围内寻找是否有这个key
// 如果有的话会直接使用，没有就创建
console.log(Symbol.for("1") === Symbol.for("1")); //true
let object = {
    name: "abs",
    [a1]: 123,
    [a2]: 456,
};
// 正常的方法无法获取到Symbol类型的数据
// 获取到symbol类型的key
console.log(Object.getOwnPropertySymbols(object));
// 获取到所有key
console.log(Reflect.ownKeys(object));
