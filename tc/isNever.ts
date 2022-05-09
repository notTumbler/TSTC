// 实现一个 IsNever 工具类型，判断指定的类型是否为 never 类型。
type I00 = IsNever<never> // true
type I11 = IsNever<never | string> // false
type I22 = IsNever<null> // false

type IsNever<T> = [T] extends [never] ? true : false