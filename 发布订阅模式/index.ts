// 监听器
const f: EventListener = function () {
  console.log(123);
};
document.addEventListener("asd", f);

document.removeEventListener("asd", f);
// 订阅中心
const e = new Event("asd");
document.dispatchEvent(e);
document.dispatchEvent(e);

// 手写发布订阅
// 实现once on emit off 订阅中心
interface I {
  map: Map<string, Function[]>;
  once: (event: string, callback: Function) => void;
  on: (event: string, callback: Function) => void;
  emit: (event: string, ...args: any[]) => void;
  off: (event: string, callback: Function) => void;
}

class Emitter implements I {
  map: Map<string, Function[]>;
  constructor() {
    this.map = new Map<string, Function[]>();
  }
  once(event: string, callback: Function) {
    const fn = (...args: any[]) => {
      callback(...args);
      this.off(event, fn);
    };
    this.on(event, fn);
  }
  on(event: string, callback: Function) {
    if (this.map.has(event)) {
      const cbs = this.map.get(event);
      cbs?.push(callback);
    } else {
      this.map.set(event, [callback]);
    }
  }
  emit(event: string, ...args: any[]) {
    const cbs = this.map.get(event);
    if (cbs) {
      cbs.forEach((fn, _) => {
        fn(...args);
      });
    }
  }
  off(event: string, callback: Function) {
    const cbs = this.map.get(event);
    cbs?.splice(cbs.indexOf(callback), 1);
  }
}

const E = new Emitter();
const ff = (a: boolean, b: number) => {
  console.log(a, b);
};
E.on("message", ff);
E.emit("abc", true, 1);
E.emit("abc", true, 1);
E.emit("message", false, 1);
E.emit("message", false, 1);
E.off("message", ff);
E.emit("message", true, 2);

console.log("once");
E.once("abc", ff);
E.emit("abc", true, 1);
E.emit("abc", true, 1);
E.emit("abc", true, 1);
E.emit("abc", true, 1);
E.emit("abc", true, 1);
E.emit("abc", true, 1);
