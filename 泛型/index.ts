// 动态类型
// function cal(a: string, b: string): Array<string> {
// return [a, b];
// }

// 使用泛型
function cal<T>(a: T, b: T): Array<T> {
  return [a, b];
}

cal(1, 2);

type A<T> = string | number | T;
let X: A<undefined> = undefined;

const axios = {
  get<T>(url: string): Promise<T> {
    return new Promise((resolve: Function, reject: Function) => {
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      };
      xhr.send(null);
    });
  },
};

interface data {
  message: string;
  status: string;
}
axios.get<data>("./data.json").then((res) => {
  console.log(res.message);
});

// 类型约束
function ffn<T extends number>(a: T, b: T) {
  return a + b;
}

// Default
type ApiRequest<T, M = "GET"> = { data: T; method: M };
type TSConfig<obj = { strict: true }> = obj;

// 遍历键值
type MovieInfoByGenre<T> = {
  [K in keyof T]: { name: string; year: number; director: string };
};

interface Date {
  name: string;
  age: number;
  value: string;
}

// 变成可选

type Optional<T extends Date> = {
  [Key in keyof T]?: T[Key];
};
