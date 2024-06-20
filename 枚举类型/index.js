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
var B = /** @class */ (function () {
    function B() {
        this.color = 0;
    }
    return B;
}());
var obj = {
    color: Color.green,
    // 也可以是color: 0,
};
// 反向读取
var types;
(function (types) {
    types[types["success"] = 0] = "success";
})(types || (types = {}));
var ss = types.success;
var key = types[ss];
console.log(typeof key); //string
