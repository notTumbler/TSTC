// 实现一个 Merge 工具类型，用于把两个类型合并成一个新的类型。第二种类型（SecondType）的 Keys 将会覆盖第一种类型（FirstType）的 Keys。
type Foo = { 
  a: number;
  b: string;
};

type Bar = {
  b: number;
};
// 先把两者共有的属性挑出来，剩下的如果是 F 中的类型会自动沿用 F 本来的类型，
// 如果是 S 中类型，则会自动覆盖
type Merge1<F, S> = Omit<F, keyof S> & S

// 遍历 F S 中所有的键，先判断是否是 S 中的，是的话就用S中的值，否则用 F 中的值
type Merge<F, S> = {
  [K in keyof (F & S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}

const ab: Merge<Foo, Bar> = { a: 1, b: 2 };