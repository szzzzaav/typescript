"use strict";
// namespace中的内容都应该导出
var Test1;
(function (Test1) {
    let Test2;
    (function (Test2) {
        Test2.a = 1;
        function fun() {
            console.log(123);
        }
        Test2.fun = fun;
    })(Test2 = Test1.Test2 || (Test1.Test2 = {}));
})(Test1 || (Test1 = {}));
(function (Test1) {
    Test1.b = 2;
})(Test1 || (Test1 = {}));
Test1.Test2.fun();
Test1.b;
