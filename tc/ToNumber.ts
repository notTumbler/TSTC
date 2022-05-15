// 实现一个 ToNumber 工具类型，用于实现把数值字符串类型转换为数值类型。具体的使用示例如下所示:

type ToNumber<
  T extends string,
  A extends any[] = []
> = `${A["length"]}` extends T ? A["length"] : ToNumber<T, [...A, 1]>;

type T0 = ToNumber<"0">; // 0
type T1 = ToNumber<"10">; // 10
type T2 = ToNumber<"20">; // 20

// 那toString呢？
type ToString<
  T extends number,
> = `${T}`

type R0 = ToString<1234>; // '0'
type R1 = ToString<10>; // '10'
type R2 = ToString<20>; // '20'