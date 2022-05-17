// 实现一个 Add 工具类型，用于实现对数值类型对应的数值进行加法运算。具体的使用示例如下所示：

type a<T, Arr extends any[] = []> = T extends Arr['length'] ? Arr : a<T, [...Arr, 1]>  

type Add<T, R> = [...a<T>, ...a<R>]['length']

type A0 = Add<5, 5>; // 10
type A1 = Add<8, 20> // 28
type A2 = Add<10, 30>; // 40