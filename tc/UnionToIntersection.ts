// 实现一个 UnionToIntersection 工具类型，用于把联合类型转换为交叉类型

type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends (U extends any ? (arg: infer A) => void : never) ? A : never

// 测试用例
type U0 = UnionToIntersection<string | number> // never
type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }