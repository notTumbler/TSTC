// 重复一个 str  指定次数(num)

type repeatStr<
  S extends string,
  N extends number,
  Arr extends any[] = [],
  ResStr extends string = ""
> = Arr["length"] extends N
  ? ResStr
  : repeatStr<S, N, [...Arr, 1], `${S}${ResStr}`>;

type resultA = repeatStr<"a", 5>;
type resultB = repeatStr<"tstc", 3>;
