// let any: any = 123;
// let unk: unknown = 345;
// let num: number = 345;

// unk = any;
// console.log(123);
// unk = num;
// console.log(456);

//ERR num = unk;

// let unk: unknown = { xxx: 123 };
//ERR console.log(unk.xxx);

// let any: any = { xxx: 123 };
// console.log(any.xxx);

// 原型链：所有类型的原型链顶层都是Object,所有Object可以是任何类型
// let a1: Object = 123;
// let a2: Object = [];
// let a3: Object = {};
// let a4: Object = () => 123;
// let a5: Object = "123";

// // console.log("compile pass");
// // 泛型约束：非原始类型的类型，只支持引用类型
// let b1: object = 123;
// // 错误 数字是原始类型
// let b2: object = "123";
// // 错误 字符串是原始类型
// console.log("compile pass");

// // 引用类型
// let b3: object = [];
// let b4: object = {};
// let b5: object = () => 123;

let c: {} = { name: "xxx" };
// c.age = 18;错误
