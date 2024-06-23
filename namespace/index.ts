// namespace中的内容都应该导出
namespace Test1 {
  export namespace Test2 {
    export let a = 1;
    export function fun() {
      console.log(123);
    }
  }
}

namespace Test1 {
  export let b = 2;
}

Test1.Test2.fun();
Test1.b;
