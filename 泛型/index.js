"use strict";
// 动态类型
// function cal(a: string, b: string): Array<string> {
// return [a, b];
// }
// 使用泛型
function cal(a, b) {
    return [a, b];
}
cal(1, 2);
let X = undefined;
const axios = {
    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            };
            xhr.send(null);
        });
    },
};
axios.get("./data.json").then((res) => {
    console.log(res.message);
});
// 类型约束
function ffn(a, b) {
    return a + b;
}
