
import 'reflect-metadata'

const Injectable = (): ClassDecorator => target => {};

class OtherService {
    a = 1
}

@Injectable()
export class TestService {
    [key:string]: any;
    constructor(public readonly otherService:OtherService) {

    }
    testMethod() {
      return this.otherService.a;
    }
}

type Constructor<T = any> = new (...args: any[]) => T;

export const Factory = <T>(target:Constructor<T>):T =>{
    const providers = Reflect.getMetadata('design:paramtypes',target);
    const args = providers.map((provider: Constructor) => new provider());
    return new target(...args)
}

