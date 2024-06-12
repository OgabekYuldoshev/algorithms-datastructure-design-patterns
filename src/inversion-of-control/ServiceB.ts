// createCalculator(10).add(10).add(10).minus(5).mult(10).divide(2).result() //125

import { InjectableClass } from "./InjectableDecorator";

@InjectableClass()
export class ServiceB {
  getLog() {
    console.log(ServiceB.name, "called!");
  }
}
