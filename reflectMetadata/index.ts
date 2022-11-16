import 'reflect-metadata'

@Reflect.metadata('inClass', 'A')
export class Test {
  @Reflect.metadata('inMethod', 'B')
  public hello(): string {
    return 'hello world';
  }
}
