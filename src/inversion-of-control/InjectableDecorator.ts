export function InjectableClass() {
  return function (target: any) {
    Reflect.defineMetadata("injectable", true, target);
  };
}
