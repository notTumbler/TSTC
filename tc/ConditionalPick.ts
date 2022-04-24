// 定义一个 ConditionalPick 工具类型，支持根据指定的 Condition 条件来生成新的类型，对应的使用示例如下

interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
  e: 3;
  f: number;
}

// 测试用例：
type StringKeysOnly = ConditionalPick1<Example, number>;
//=> {a: string}

type ConditionalPick1<O extends object, T> = {
  [K in keyof O as (O[K] extends T ? K : never)]: O[K]
}

type StringKeysOnlyResult = ConditionalPick2<Example, Function>;
//=> {a: string}
// 繁琐一点的办法就是先通过目标类型拿到对应的key,再使用Pick取到目标属性
type getKey<O extends object, T> = {
  [K in keyof O]: O[K] extends T ? K : never
}[keyof O]

type ConditionalPick2<O extends object, T> = Pick<O, getKey<O,T>>