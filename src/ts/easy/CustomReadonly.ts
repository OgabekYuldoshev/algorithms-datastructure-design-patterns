interface Item {
  title: string;
  desc: string;
}

type CustomReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

const item: CustomReadonly<Item> = {
  title: "Custom Readonly",
  desc: "Custom Readonly Description",
}
//   ^?

//item.title = 'Chaned Item Title';
