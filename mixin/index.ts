import { stringify } from "querystring";

// 对象的混入
interface AA {
  name: string;
}

interface BB {
  age: number;
}

let aa: AA = {
  name: "s",
};

let bb: BB = {
  age: 12,
};

// 浅拷贝
let cc1 = { ...aa, ...bb }; // 新的类型 {name:string,age:number}
let cc2 = Object.assign(aa, bb); //交叉类型 AA&BB

// 深拷贝
let deep = structuredClone(aa);
deep.name;

class Logger {
  log(msg: string): void {
    console.log(msg);
  }
}

class Html {
  render(html: string) {
    console.log("render");
  }
}

class App {
  run() {
    console.log("run");
  }
}

type Constructer<T> = new (...args: any[]) => T;

function pluginMinxin<T extends Constructer<App>>(
  Base: T,
  ...MixinObj: Constructer<any>[]
) {
  return class extends Base {
    [key: string]: any;
    constructor(...args: any[]) {
      super(args);
      MixinObj.forEach((e, _) => {
        let cur = new e();
        Object.getOwnPropertyNames(e.prototype).forEach((prop: string) => {
          if (prop !== "constructor") {
            this[prop] = cur[prop].bind(this);
          }
        });
      });
    }
  };
}

const mixin = pluginMinxin(App, Html, Logger);
new mixin();
