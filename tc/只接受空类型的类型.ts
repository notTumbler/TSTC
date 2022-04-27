// 使用类型别名定义一个 EmptyObject 类型，使得该类型只允许空对象赋值：

type EmptyObject = {
  [K in symbol | string | number]: never;
};

// test Example
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = {
  // 将出现编译错误
  prop: "TS",
};

// 更改以下 takeSomeTypeOnly 函数的类型定义，让它的参数只允许严格SomeType类型的值
type SomeType = {
  prop: string;
  a: number
};
// 更改以下函数的类型定义，让它的参数只接受严格等于SomeType类型的值
// function takeSomeTypeOnly(x: SomeType) { return x }
function takeSomeTypeOnly<T extends SomeType>(x: isStrictlyEqual<SomeType, T>) {
  return x;
}

type isStrictlyEqual<Origin, Params extends Origin> = {
  [K in keyof Params]: K extends keyof Origin ? Params[K] : never;
}

type resType = isStrictlyEqual<SomeType, {prop: '123', a: '23'}>


// 测试用例：
const x = { prop: "a" };
takeSomeTypeOnly(x); // 可以正常调用

const y = { prop: "a", a: 22 };
takeSomeTypeOnly(y); // 将出现编译错误

const z = { prop: "string", a: 22, c:23 };
takeSomeTypeOnly(z); // 将出现编译错误
