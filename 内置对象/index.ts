// ECMAScript

import { Session } from "inspector";

let num: Number = new Number(1);
let date: Date = new Date();
let reg: RegExp = new RegExp();
let xhr: XMLHttpRequest = new XMLHttpRequest();

// Dom
// 元素名称
let div: HTMLDivElement = document.querySelector("div");
let input: HTMLInputElement = document.querySelector("input");

let section: HTMLElement = document.querySelector("section");

let footers: NodeList = document.querySelectorAll("footers");

let div: NodeListOf<HTMLElement | HTMLDivElement> =
  document.querySelector("div");

// BOM
let local: Storage = localStorage;
let session: Storage = sessionStorage;
let lo: Location = location;

// 接受返回的类型
let promise: Promise<number> = new Promise((r) => r(1));
