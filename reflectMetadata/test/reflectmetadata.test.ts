import {Test} from '../index'
import {TestService,Factory} from '../factory'
import {SomeClass ,PATH_METADATA,METHOD_METADATA,mapRoute} from '../route'


describe('reflect-metadata package will work well',()=>{

  it('reflect.metadata function should be ok',()=>{
    expect(Reflect.getMetadata('inClass',Test)).toEqual('A')
    expect(Reflect.getMetadata('inMethod',new Test(),'hello')).toEqual('B')
  });

  it('Factory decorator will work',()=>{
    expect(Factory(TestService).testMethod()).toEqual(1)
  });

  it('Route decorator will work',()=>{
    expect(Reflect.getMetadata(PATH_METADATA,SomeClass)).toEqual('/test')
    expect(Reflect.getMetadata(METHOD_METADATA,new SomeClass().someGetMethod)).toEqual('Get')

    expect(mapRoute(new SomeClass())).toHaveLength(2)

  })

})

