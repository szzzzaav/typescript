// interface Axx {
//   name: string;
//   age: number;
// }
// // 注意不能多属性也不能少属性

import { type } from "os";

// interface Axx {
//   Ikun: string;
// }

// // 遇到重名的会合并

// let a: Axx = {
//   name: "xxx",
//   age: 1,
//   Ikun: "xxx",
//   // zzz: 12,错误
// };

// interface Axx {
//   name: string;
//   age: number;
//   // 索引签名
//   [propName: string]: any;
//   // 注意这里类型如果为string，那么其他属性的类型也要变为string
// }
// // 注意不能多属性也不能少属性

// // interface Axx {
// //   Ikun: string;
// // }

// // 遇到重名的会合并

// let a: Axx = {
//   name: "xxx",
//   age: 1,
//   // 有了索引签名以后，其他内容也可以定义
//   Ikun: "xxx",
//   sjdalasd: "xxx",
//   // zzz: 12,错误
// };

// interface Axx {
//   name: string;
//   age?: number;
//   readonly cb: (args: any) => boolean;
// }

// let a: Axx = {
//   name: "xxx",
//   // 由于有了？就可以可写可不写
//   age: 1,
//   cb: () => {
//     return false;
//   },
// };

// 继承
// interface A {
//   name: unknown;
//   age: number;
// }

// interface B extends A {
//   name: () => number;
// }

// let a: B = {
//   name: (): number => {
//     return 1;
//   },
//   age: 18,
// };

// console.log(typeof a.name());

// interface fn {
//   (name: string): number[];
// }

// const fn: fn = function (name: string) {
//   return [1, 2];
// };

// interface fn1 {
//   (name: string): boolean;
// }

// interface fn2 {
//   (name: number): number;
// }

// interface combin extends fn1, fn2 {
//   addition: boolean;
// }

// const fn: combin = (args: any): any => {
//   if (typeof args === "number") {
//     return 1;
//   } else {
//     return false;
//   }
// };
// fn.addition = false;

interface fn1 {
  (args: string): boolean;
}

interface fn2 extends fn1 {
  (args: boolean): string;
}

const fn: fn2 = (args: any): any => {
  if (typeof args === "string") return false;
  if (typeof args === "boolean") return "123";
};

console.log(fn(" "), fn(false));
