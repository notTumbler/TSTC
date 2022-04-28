// 定义 NonEmptyArray 工具类型，用于确保数据非空数组

const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['el'] // 非空数据，正常使用

// 数组没有长度就没有索引 0 
// type NonEmptyArray<T> = {
//   [P in number]: T
// } & {
//   0: T
// }

// 但是这种写法更简洁
// type NonEmptyArray<T> = T[] & { 0: T }

type NonEmptyArray<T> = [T, ...T[]]
