import { InjectableClass } from "./InjectableDecorator";
import { ServiceB } from "./ServiceB";

@InjectableClass()
export class ServiceA {
  constructor(private serviceB: ServiceB) {}
  getAlert() {
    this.serviceB.getLog();
    console.log(ServiceA.name, "alered!");
  }
}
