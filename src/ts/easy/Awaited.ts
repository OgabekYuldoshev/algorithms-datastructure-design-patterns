type ExampleType = Promise<number>

type MyAwaited<T extends Promise<any>> = T extends { then(result: infer S) } ? S extends (value: infer V) => void ? V : never : never

type Result = MyAwaited<ExampleType>
//   ^?