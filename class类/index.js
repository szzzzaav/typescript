"use strict";
class Dom {
    createElement(el) {
        return document.createElement(el);
    }
    setText(el, text) {
        el.textContent = text;
    }
    render(data) {
        let root = document.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach((item, _) => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        return root;
    }
}
class Vue extends Dom {
    init() {
        let data = {
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
        let app = typeof this.options.el === "string"
            ? document.querySelector(this.options.el)
            : this.options.el;
        app.appendChild(this.render(data));
    }
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
}
const v = new Vue({
    el: "123",
});
