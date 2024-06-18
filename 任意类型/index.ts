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

let any: any = { xxx: 123 };
console.log(any.xxx);
