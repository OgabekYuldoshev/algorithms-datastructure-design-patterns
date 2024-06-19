const foo = (arg1: string, arg2: number): void => { }

type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer S) => any ? S : any

type FunctionParamsType = Parameters<typeof foo>
//   ^?