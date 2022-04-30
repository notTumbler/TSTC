// 实现一个 IsEqual 工具类型，用于比较两个类型是否相等。

type IsEqual<A, B> = A extends B ? (B extends A ? true : false) : false;

// 测试用例
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }>; // true
type E2 = IsEqual<[1], []>; // false
type res1 = IsEqual<{ a: 1; b: 1 }, { a: 1 }>; // false

type IsEqual2<A, B> = 
(<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2)
  ? true
  : false;

// 测试用例
type E02 = IsEqual2<1, 2>; // false
type E12 = IsEqual2<{ a: 1 }, { a: 1 }>; // true
type E22 = IsEqual2<[1], []>; // false
type res2 = IsEqual2<{ a: 1; b: 1 }, { a: 1 }>; // true
