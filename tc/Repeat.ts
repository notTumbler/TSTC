//实现一个 Repeat 工具类型，用于根据类型变量 C 的值，重复 T 类型并以元组的形式返回新的类型


type Repeat<T, C extends number, R extends any[] = []> = R['length'] extends C ? R : Repeat<T, C, [T, ...R]>

type R0 = Repeat<0, 0>; // []
type R1 = Repeat<1, 1>; // [1]
type R2 = Repeat<number, 2>; // [number, number]