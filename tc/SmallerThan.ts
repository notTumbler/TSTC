// 实现一个 SmallerThan 工具类型，用于比较数值类型的大小。具体的使用示例如下所示：

// CountArr['length']先匹配到谁，谁就是小的那个
type SmallerThan<
  N extends number,
  M extends number,
  CountArr extends any[] = []
> = CountArr['length'] extends M ? false
: CountArr['length'] extends N ? true : SmallerThan<N, M, [...CountArr, 1]>

type S0 = SmallerThan<0, 1>; // true
type S1 = SmallerThan<2, 0>; // false
type S2 = SmallerThan<8, 10>; // true