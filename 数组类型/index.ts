// number[]
let arr1: number[] = [1, 2, 4, 4, 5];

// 泛型
let arr2: Array<number> = [1, 3, 4, 5];

// 对象数组
interface X {
  name: string;
}

let arr3: X[] = [{ name: "1" }, { name: "2" }];

// 二维数组
let arr4: number[][] = [[1], [2], [3]];

// 元组
let arr5: [number, {}, string] = [1, {}, "123"];

function a(...args: any[]) {
  let a: IArguments = arguments;
  // arguments不是数组
  let b: A = arguments;
}

// IArguments原理
interface A {
  callee: Function;
  length: number;
  [index: number]: any;
}
