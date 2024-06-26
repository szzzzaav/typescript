// // 类装饰器

// // target 构造函数
// const Base: ClassDecorator = (target) => {
//   console.log(target);
//   target.prototype.xxx = "a";
//   // 有了这个构造函数就可以不去破坏类里自身的结构，而是直接通过target.prototype来添加成员
// };

// @Base
// class Http {}

// // 实际上就是调用Base(Http)

// 类装饰器

// target 构造函数

import axios from "axios";
import "reflect-metadata";

const Base = function (name: string): ClassDecorator {
  const fn: ClassDecorator = (target) => {
    target.prototype.name = name;
  };
  return fn;
};

function Get(url: string): MethodDecorator {
  const fn: MethodDecorator = (target, _, descriptor: PropertyDescriptor) => {
    const key = Reflect.getMetadata("key", target);
    axios.get(url).then((res) => {
      descriptor.value(key ? res.data[key] : res.data);
    });
  };
  return fn;
}

const Result = (): ParameterDecorator => {
  const fn: ParameterDecorator = (target, key, index) => {
    // target原型对象
    // key函数名
    // index参数所在位置
    // console.log(target, key, index);
    // {} get 0
    Reflect.defineMetadata("key", "message", target);
  };
  return fn;
};

@Base("sulaimuzzz")
class Http {
  @Get("https://api.apiopen.top/api/getPersonDynamicList?page=0&size=10")
  get(@Result() data: any) {
    console.log(data);
  }

  // @Post
  // post() {}
}

const ht = new Http();
