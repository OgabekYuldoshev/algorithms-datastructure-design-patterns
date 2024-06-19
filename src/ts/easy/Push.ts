type Push<T extends any[], P extends any> = [...T, P]

type A = Push<[1, 2, 3], 6>
//   ^?