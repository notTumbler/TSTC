//实现一个 OptionalKeys 工具类型，用来获取对象类型中声明的可选属性。
type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};
type PersonOptionalKeys = OptionalKeys<Person>; // "from" | "speak"

// type a = Pick<Person, 'age'>
// type b = Partial<a>
// type c = isEqual<a,b>

// 非严格模式下，可选参数的默认类型中会自动加入undefined, from? -> string | undefined

type isEqual<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false
type OptionalKeys<T> = {
  [K in keyof T]: isEqual<Pick<T, K>, Partial<Pick<T,K>>> extends true ? K : never
}[keyof T]



