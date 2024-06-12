export class IocContainer {
  dependencies: any[] = [];

  init(deps: any[]) {
    for (const dep of deps) {
      const isInjectable = Reflect.getMetadata("injectable", dep);
      if (!isInjectable) return;

      const paramTypes = Reflect.getMetadata("design:paramtypes", dep) || [];

      const childrenDep = paramTypes.map((paramType) => {
        this.init([paramType]);

        if (!this.dependencies[paramType.name]) {
          this.dependencies[paramType.name] = new paramType();
          return this.dependencies[paramType.name];
        }
        return this.dependencies[paramType.name];
      });

      if (!this.dependencies[dep.name]) {
        this.dependencies[dep.name] = new dep(...childrenDep);
      }
    }

    return this;
  }

  public get<T extends new (...args: any[]) => any>(
    serviceClass: T
  ): InstanceType<T> {
    return this.dependencies[serviceClass.name];
  }
}
