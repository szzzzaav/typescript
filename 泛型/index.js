// 动态类型
// function cal(a: string, b: string): Array<string> {
// return [a, b];
// }
// 使用泛型
function cal(a, b) {
    return [a, b];
}
cal(1, 2);
var X = undefined;
var axios = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            };
            xhr.send(null);
        });
    },
};
axios.get("./data.json").then(function (res) {
    console.log(res.message);
});
