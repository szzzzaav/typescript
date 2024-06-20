enum Color {
  green, //0
  red, //1
  orange, //2
}

enum Colors {
  green = 1, //1
  orange, //2
  red = 2, //2
}

interface zzz {
  color: Color.green;
}

class B implements zzz {
  color: Color.green = 0;
}

let obj: zzz = {
  color: Color.green,
  // 也可以是color: 0,
};

// 反向读取
enum types {
  success = "123",
}

// let ss: string = types.success;
// let key = types[ss]; //string 不可以用于反射
// console.log(typeof key); //string
