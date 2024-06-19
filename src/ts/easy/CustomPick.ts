interface Item {
  title: string;
  desc: string;
  isActive: boolean;
}

type CustomPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

type PickedItem = CustomPick<Item, "title" | 'isActive'>
//   ^?