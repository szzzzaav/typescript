// 1.class的基本用法 继承和类型约束 implements
// 2.class的修饰符readonly private protected public
interface Options {
  el: string | HTMLElement;
}

interface VueCls {
  options: Options;
  init(): void;
}

interface Vnode {
  tag: string;
  text?: string;
  children?: Vnode[];
}

class Dom {
  createElement(el: string) {
    return document.createElement(el);
  }
  setText(el: HTMLElement, text: string | null) {
    el.textContent = text;
  }
  render(data: Vnode): HTMLElement {
    let root = document.createElement(data.tag);
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item, _) => {
        let child: HTMLElement = this.render(item);
        root.appendChild(child);
      });
    }
    return root;
  }
}

class Vue extends Dom implements VueCls {
  options: Options;
  init(): void {
    let data: Vnode = {
      tag: "div",
      children: [
        {
          tag: "section",
          text: "first child",
        },
        {
          tag: "div",
          text: "second child",
        },
      ],
    };
    let app: HTMLElement =
      typeof this.options.el === "string"
        ? (document.querySelector(this.options.el) as HTMLElement)
        : this.options.el;
    app.appendChild(this.render(data));
  }
  constructor(options: Options) {
    super();
    this.options = options;
    this.init();
  }
}

const v: Vue = new Vue({
  el: "123",
});
