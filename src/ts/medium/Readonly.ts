interface Todo {
    title: string
    description: string
    completed: boolean
  }
  

  type MyReadonly2<T, K extends keyof T> = Omit<T, K> &
  Readonly<Pick<T, K>>;

  type Obj = MyReadonly2<Todo, 'title' | 'description'>
  //   ^?

  const todo: Obj = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.completed = true