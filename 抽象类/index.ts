// abstract 不能给出具体实现
// abstract类 不能实例化

abstract class x {
  name: string;
  constructor(name?: string) {
    this.name = name as string;
  }
  getName(): string {
    return this.name;
  }
  abstract init(name: string): void;
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
