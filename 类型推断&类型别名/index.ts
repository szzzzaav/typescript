// let aaaa = "123";
// aaaa = 1;

// 类型别名
type str = string;
let strr: str = "123";

// extends 在type中是包含的意思
// 左边的值 是否会作为右边类型的子类型
type num = 1 extends number ? 1 : 0;
