import "reflect-metadata";

import { IocContainer } from "./IocContainer";
import { ServiceA } from "./ServiceA";
import { ServiceB } from "./ServiceB";

const container = new IocContainer();

container.init([ServiceA, ServiceB])

const serviceA = container.get(ServiceA)

serviceA.getAlert()
