type AAA = string & number;
function test(): never {
  throw new Error("err");
}

type AAAA = number | void | never;

// let sss:string = '1'
// const nev:never = sss;//err
