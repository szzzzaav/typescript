// 联合类型
let number: string | number = "123";

// 交叉类型
interface People {
  name: string;
  age: number;
}

interface Man {
  sex: string;
}

const xx = (man: People & Man): void => {
  console.log(man);
};

console.log(xx({ name: "123", age: 12, sex: "man" }));

// 类型断言
let fn = function (num: number | string): void {
  console.log((num as string).length);
  console.log((<string>num).length);
};

fn("123");
// globalThis = "123"; 错误
(globalThis as any).abc = "123";
