function extend<T extends object, U extends object>(first: T, second: U): T & U {
    const result = <T & U>{};
    for (let id in first) {
      (result as T)[id] = first[id];
    }
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        (<U>result)[id] = second[id];
      }
    }
  
    return result;
  }
  
  const x = extend({ a: 'hello' }, { b: 42 });
  
  // 现在 x 拥有了 a 属性与 b 属性
  const a = x.a;
  const b = x.b;


  interface Foo {
    bar: number;
    bas: string;
  }
  


  const foo: {
    readonly bar: number;
  } = {
    bar: 123
  };
  
  function iMutateFoo(foo: { bar: number }) {
    foo.bar = 456;
  }
  
  iMutateFoo(foo);
  // console.log(foo.bar);

  interface Duck {
    sound:'gagaga'
  }
  const b1 = {
    name:'haha',
    sound:'gagaga' as 'gagaga'
  }
  // 如果直接使用字面量对象，会出现更严格的类型检查
  let aa: Duck = {
    // name:'haha', // 报错，更严格的类型检查
    sound:'gagaga'
  }
  // 鸭子辩型法，子结构辩型法，变得宽松一点了
  let a1: Duck = b1

  let ssss = []
  ssss.forEach(() => undefined)