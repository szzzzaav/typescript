"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let aa = {
    name: "s",
};
let bb = {
    age: 12,
};
// 浅拷贝
let cc1 = Object.assign(Object.assign({}, aa), bb); // 新的类型 {name:string,age:number}
let cc2 = Object.assign(aa, bb); //交叉类型 AA&BB
// 深拷贝
let deep = structuredClone(aa);
deep.name;
class Logger {
    log(msg) {
        console.log(msg);
    }
}
class Html {
    render(html) {
        console.log("render");
    }
}
class App {
    run() {
        console.log("run");
    }
}
function pluginMinxin(Base, ...MixinObj) {
    return class extends Base {
        constructor(...args) {
            super(args);
            MixinObj.forEach((e, _) => {
                let cur = new e();
                Object.getOwnPropertyNames(e.prototype).forEach((prop) => {
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
