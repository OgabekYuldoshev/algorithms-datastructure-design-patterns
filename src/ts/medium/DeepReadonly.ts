type X = {
  x: {
    a: 1;
    b: "hi";
    x: {
      a: 1;
      b: "hi";
    };
  };
  y: "hey";
};

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

