//实现一个 Trim 工具类型，用于对字符串字面量类型进行去空格处理

type TrimLeft<S1 extends string> = S1 extends ` ${infer U}` ? TrimLeft<U> : S1
type TrimRight<S2 extends string> = S2 extends `${infer U} ` ?
TrimRight<U> : S2
type Trim<S extends string> = TrimLeft<TrimRight<S>> 
// 测试用例
type Result = Trim<' semlinker '>
//=> 'semlinker'

// 另一种写法
type trimSpace<S extends string, frontOrEnd extends 'left' | 'right'> = S extends (frontOrEnd extends 'left' ? ` ${infer R}` : `${infer R} `) ? trimSpace<R, frontOrEnd> : S

type Trims<S extends string> = trimSpace<trimSpace<S, 'right'>, 'left'> 
type Result2 = Trims<' efeiliusi'>
//=> 'efeiliusi'

