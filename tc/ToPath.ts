// 实现一个 ToPath 工具类型，用于把属性访问（. 或 []）路径转换为元组的形式。

type strIntoTuple<T extends string> = T extends `${infer A}[${infer B}]`
  ? [A, B]
  : [T];

type ToPath<S extends string> = S extends `${infer F}.${infer Rest}`
  ? [...strIntoTuple<F>, ...ToPath<Rest>]
  : strIntoTuple<S>;

type res = ToPath<"foo.bar.baz">; //=> ['foo', 'bar', 'baz']
type res2 = ToPath<"foo[0].bar.baz">; //=> ['foo', '0', 'bar', 'baz']
