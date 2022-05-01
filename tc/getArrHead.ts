// 实现一个 getHead 工具类型，用于获取数组类型的第一个类型

type getHead1<T extends Array<any>> = T extends [infer First, ...infer Rest] ? First : never

type getHead<T extends any[]> = T extends [] ? never : T[0]
// ==> 等价于 
type anotherGetHead<T extends []> = T['length'] extends 0 ? never : T[0]

// 测试用例
type H0 = getHead<[]> // never
type H1 = getHead<[1]> // 1
type H2 = getHead<[3, 2]> // 3
type H3 = getHead<["a", "b", "c"]> // "a"
type H4 = getHead<[undefined, "b", "c"]> // undefined
type H5 = getHead<[null, "b", "c"]> // null