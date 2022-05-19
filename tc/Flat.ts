
type Flat<T extends any[]> = T extends [infer H, ...infer Rest] ?
 H extends any[] ? [...Flat<H>, ...Flat<Rest>] : [H, ...Flat<Rest>]
 : T


type F00 = Flat<[]> // []
type F10 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
type F20 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]