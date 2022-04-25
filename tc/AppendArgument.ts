//定义一个工具类型 AppendArgument，为已有的函数类型增加指定类型的参数，新增的参数名是 x，将作为新函数类型的第一个参数。具体的使用示例如下所示：

type Fn = (a: number, b: string) => number

type FinalFn = AppendArgument<Fn, boolean> 
// (x: boolean, a: number, b: string) => number

// -- 1
// type AppendArgument<F, A> = F extends (...args: infer Args) => infer Return ? (x: A, ...args: Args) => Return : never

// --2
type AppendArgument<F extends (...args: any)=> any, T> = (x: T, ...args: Parameters<F>) => ReturnType<F>

