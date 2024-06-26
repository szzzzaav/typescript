// 监听器
var f = function () {
    console.log(123);
};
document.addEventListener("asd", f);
document.removeEventListener("asd", f);
// 订阅中心
var e = new Event("asd");
document.dispatchEvent(e);
document.dispatchEvent(e);
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.map = new Map();
    }
    Emitter.prototype.once = function (event, callback) {
        var _this = this;
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            callback.apply(void 0, args);
            _this.off(event, fn);
        };
        this.on(event, fn);
    };
    Emitter.prototype.on = function (event, callback) {
        if (this.map.has(event)) {
            var cbs = this.map.get(event);
            cbs === null || cbs === void 0 ? void 0 : cbs.push(callback);
        }
        else {
            this.map.set(event, [callback]);
        }
    };
    Emitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var cbs = this.map.get(event);
        if (cbs) {
            cbs.forEach(function (fn, _) {
                fn.apply(void 0, args);
            });
        }
    };
    Emitter.prototype.off = function (event, callback) {
        var cbs = this.map.get(event);
        cbs === null || cbs === void 0 ? void 0 : cbs.splice(cbs.indexOf(callback), 1);
    };
    return Emitter;
}());
var E = new Emitter();
var ff = function (a, b) {
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
