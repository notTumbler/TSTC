// 实现一个 Mutable 工具类型，用于移除对象类型上所有属性或部分属性的 readonly 修饰符
type Foo1 = {
  readonly a: number;
  readonly b: string;
  readonly c: boolean;
};

type Mutable<T, Keys extends keyof T = keyof T> = {
  -readonly[K in Keys]: T[K]
} & Omit<T, Keys>


const mutableFoo1: Mutable<Foo1, 'a'> = { a: 1, b: '2', c: true };

mutableFoo1.a = 3; // OK
mutableFoo1.b = '6'; // Cannot assign to 'b' because it is a read-only property.