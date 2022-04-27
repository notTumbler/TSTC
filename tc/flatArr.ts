//定义一个 NativeFlat 工具类型，支持把数组类型拍平（扁平化）

// 测试用例：
type res1 = twoLayersFlat2<[["a"], ["b", "c"], ["d"]]>;
// NaiveResult的结果： "a" | "b" | "c" | "d"

/** 下面两种只能拍平两层* */
type twoLayersFlat1<T extends any[]> = T[number] extends any[]
  ? twoLayersFlat1<T[number]>
  : T[number];

type twoLayersFlat2<T extends any[]> = {
  [K in keyof T]: T[K] extends any[] ? T[K][number] : T[K];
}[number];

/** ****** 深度拍平 **********  */
type res2 = flatArr<[["a"], ["b", "c"], ["d", ["e"], ["f", ["g", ["h"]]]]]>;

type flatArr<T extends any[]> = {
  [K in keyof T]: T[K] extends any[] ? flatArr<T[K]> : T[K];
}[number];
