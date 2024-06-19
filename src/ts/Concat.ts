type Concat<T extends any[], P extends any[]> = [...T, ...P]

type A = Concat<[1, 2, 3], [6]>
//   ^?