"use strict";
// abstract 不能给出具体实现
// abstract类 不能实例化
class x {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
// 只有抽象类才有抽象成员
// class y {
//   abstract b: number;
//   abstract a(): void;
// }
// 使用派生类继承抽象类，要把抽象类的方法进行实现
// 使用implement
class R extends x {
    constructor() {
        super();
        this.init();
    }
    init() {
        console.log("init");
    }
}
const r = new R();
