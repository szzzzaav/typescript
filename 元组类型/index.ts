// let arr: [number, string] = [1, "1"];
// // 会被推断为[number|string]类型
// arr.push(1);

let arr: readonly [number, string] = [1, "1"];
// arr.push(1);不允许

let brr: [x: number, y?: string] = [1];
