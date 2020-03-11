abstract class Parent {
    abstract say():void;
    abstract name:string;
    static readonly age:number = 1
}

interface IDown{
  down():void
}

abstract class children extends Parent implements IDown{
    down(): void {
        throw new Error("Method not implemented.");
    }
    say(): void {
        console.log('children')
    }
}

interface IUser {
  name:string,
  age:number,
  sayHello(this:IUser):void
}
let c:IUser = {
    name: 'hrt',
    age:18,
    sayHello(){
        console.log(this.name)
    }
 }
let s = c.sayHello
s() //接口强约束了this指向，这样用会报错
