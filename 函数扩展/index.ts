// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(1, 1));

// const add2 = (a: number, b: number): number => {
//   return a + b;
// };

// 函数默认的参数|函数可选参数
// function add(a: number = 10, b?: number): number {
//   return a;
// }

// interface Obj {
//   user: number[];
//   add: (this: Obj, num: number) => void;
// }

// // ts可以定义this的类型，在js中无法使用
// // 必须是第一个参数定义this的类型
// let obj: Obj = {
//   user: [1, 2, 3],
//   add(this: Obj, num: number) {
//     console.log(this);
//   },
// };

// 函数重载
// 重载签名
function getInfo(id: number): string;
function getInfo(name: string): string;
function getInfo(id: number, name: string): string;

// 函数的具体实现
function getInfo(param1: number | string, param2?: string): string {
  if (typeof param1 === "number" && typeof param2 === "string") {
    return `ID: ${param1}, Name: ${param2}`;
  } else if (typeof param1 === "number") {
    return `ID: ${param1}`;
  } else if (typeof param1 === "string") {
    return `Name: ${param1}`;
  }
  return "";
}

// 使用重载函数
console.log(getInfo(1)); // 输出: ID: 1
console.log(getInfo("Alice")); // 输出: Name: Alice
console.log(getInfo(1, "Alice")); // 输出: ID: 1, Name: Alices
