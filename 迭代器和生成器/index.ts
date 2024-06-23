function* gen() {
  yield Promise.resolve("abc");
  yield "1", yield "2", yield "3";
}

const generate = gen();
console.log(generate.next());
//{ value: Promise { 'abc' }, done: false };
// done 表示是否迭代完成 , 如果是 true就表示迭代完成

// 迭代器

let s: Set<number> = new Set([1, 2, 2, 31]);
let m: Map<any, any> = new Map();
m.set("a", 1);
m.set("b", 2);

function args() {
  console.log(arguments);
}

// let list: NodeList = document.querySelectorAll(".list");
// 迭代这些数组的方法

// const each = (value: any) => {
//   let It: Iterator<any, any, any> = value[Symbol.iterator]();
//   let next: any = { done: false };
//   while (!next.done) {
//     next = It.next();
//     if (!next.done) console.log(next.value);
//   }
// };

// each(s);
// each(m);

// 迭代器的语法糖
for (let val of s) {
}

// for of 对象不可以用，因为对象身上没有Symbol.Iterator

// 解构或者...底层原理也是调用Iterator
let [o, p, q, ...rest] = [1, 2, 3, 5, 6, 7];

// 让对象支持for of
let ItObj = {
  name: "xxx",
  age: 12,
  [Symbol.iterator]() {
    return {
      name: this.name,
      age: this.age,
      curV: 0,
      next() {
        if (this.curV >= 2) {
          return {
            value: undefined,
            done: true,
          };
        } else {
          return {
            value: this.curV++ === 0 ? this.name : this.age,
            done: false,
          };
        }
      },
    };
  },
};

for (let val of ItObj) {
  console.log(val);
}
