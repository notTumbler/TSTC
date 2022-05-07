//实现一个 RemoveIndexSignature 工具类型，用于移除已有类型中的索引签名。
interface Foo {
  [key: string]: any;
  [key: number]: any;
  bar(): void;
}

// 因为索引签名就两种，字符串、数字类型索引签名
// type RemoveIndexSignature<T> = {
//   [K in keyof T as string extends K
//     ? never
//     : number extends K
//     ? never
//     : K]: T[K];
// };

//利用 索引签名是 变量，普通key(bar)是字符串字面量
type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer Str}` ? K : never]: T[K];
};

type FooWithOnlyBar = RemoveIndexSignature<Foo>; //{ bar: () => void; }
