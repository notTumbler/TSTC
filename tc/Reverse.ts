// 实现一个 Reverse 工具类型，用于对元组类型中元素的位置颠倒，并返回该数组.

type Reverse<
  T extends Array<any>,
  R extends Array<any> = []
> = T extends [infer First, ...infer Rest] ? Reverse<Rest, [First, ...R]> : R

type R0 = Reverse<[]> // []
type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]