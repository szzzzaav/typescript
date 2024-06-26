"use strict";
// // 类装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const axios_1 = __importDefault(require("axios"));
require("reflect-metadata");
const Base = function (name) {
    const fn = (target) => {
        target.prototype.name = name;
    };
    return fn;
};
function Get(url) {
    const fn = (target, _, descriptor) => {
        const key = Reflect.getMetadata("key", target);
        axios_1.default.get(url).then((res) => {
            descriptor.value(key ? res.data[key] : res.data);
        });
    };
    return fn;
}
const Result = () => {
    const fn = (target, key, index) => {
        // target原型对象
        // key函数名
        // index参数所在位置
        // console.log(target, key, index);
        // {} get 0
        Reflect.defineMetadata("key", "message", target);
    };
    return fn;
};
let Http = class Http {
    get(data) {
        console.log(data);
    }
};
__decorate([
    Get("https://api.apiopen.top/api/getPersonDynamicList?page=0&size=10"),
    __param(0, Result()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Http.prototype, "get", null);
Http = __decorate([
    Base("sulaimuzzz")
], Http);
const ht = new Http();
