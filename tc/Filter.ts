// 实现一个 Filter 工具类型，用于根据类型变量 F 的值进行类型过滤。具体的使用示例如下所示

type isAny<T> = 0 extends 1 & T ? true : false;

// type Filter<T extends any[], F, Res extends any[] = []> =
// T extends [infer Head, ...infer Tail]
//  ?
//   isAny<Head> extends true
//     ? Filter<Tail, F, [Head, ...Res]>
//     : Head extends F
//        ? Filter<Tail, F, [Head, ...Res]>
//        : Filter<Tail, F, [...Res]>
// : Res

type Filter<T extends any[], F, Res extends any[] = []> = T extends [
  infer H,
  ...infer Rest
]
  ? [H] extends [F]
    ? Filter<Rest, F, [H, ...Res]>
    : Filter<Rest, F, [...Res]>
  : Res;

type F0 = Filter<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
type F1 = Filter<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
type F2 = Filter<[0, true, any, "abao"], string>; // [any, "abao"]
