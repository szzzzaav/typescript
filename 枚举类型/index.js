"use strict";
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var Colors;
(function (Colors) {
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["orange"] = 2] = "orange";
    Colors[Colors["red"] = 2] = "red";
})(Colors || (Colors = {}));
class B {
    constructor() {
        this.color = 0;
    }
}
let obj = {
    color: Color.green,
    // 也可以是color: 0,
};
// 反向读取
var types;
(function (types) {
    types["success"] = "123";
})(types || (types = {}));
// let ss: string = types.success;
// let key = types[ss]; //string 不可以用于反射
// console.log(typeof key); //string
