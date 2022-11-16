import 'reflect-metadata'


export const METHOD_METADATA = 'method'
export const PATH_METADATA = 'path'

const Controller = (path:string):ClassDecorator => {
  return (target)=>{
     Reflect.defineMetadata(PATH_METADATA,path,target)
  } 
}

const createMethodDecorator = (method:string)=>(path:string):MethodDecorator => {
    return (target,key,descriptor) => {
       Reflect.defineMetadata(PATH_METADATA,path,descriptor.value as any);
       Reflect.defineMetadata(METHOD_METADATA,method,descriptor.value as any)
    }
}

const Get = createMethodDecorator('Get')
const Post = createMethodDecorator('Post')

@Controller('/test')
export class SomeClass {
  @Get('/a')
  someGetMethod() {
    return 'hello world';
  }

  @Post('/b')
  somePostMethod() {}
}

export function mapRoute(instance:Object){
    const isConstructor = (name:string) => name === 'constructor'
    const prototype = Object.getPrototypeOf(instance)
    const methodNames = Object.getOwnPropertyNames(prototype).filter(name=>!isConstructor(name)&& typeof prototype[name]==='function')
    return methodNames.map(methodName=>{
        const fn = prototype[methodName]
        const route = Reflect.getMetadata(PATH_METADATA,fn)
        const method = Reflect.getMetadata(METHOD_METADATA,fn)
        return {
            methodName,
            method,
            route,
            fn
        }
    })
}
