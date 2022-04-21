// 从对象中取出number类型的值
type targetObj = {
  strA: 'strA',
  strB: 'strB',
  num1: 12,
  num2: 234,
  fn: () => {},
  fn2: () => void
}

type getTypeInObject<O extends Object> = {
  [P in keyof O]: O[P] extends number ? O[P] : never
}[keyof O]

type getNumber = getTypeInObject<targetObj>

// 扩展一下: 取得指定类型的值
type getAnyTypeInObject<O extends Object, Type extends Object> = {
  [P in keyof O]: O[P] extends Type ? O[P] : never
}[keyof O]
type getString = getAnyTypeInObject<targetObj, string>
type getFn = getAnyTypeInObject<targetObj, Function>
