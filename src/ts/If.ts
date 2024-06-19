type IF<E extends boolean, T extends any, P extends any> = E extends true ? T : P

type a = IF<true, "a", "b">
//   ^?

type b = IF<false, "a", "b">
//   ^?