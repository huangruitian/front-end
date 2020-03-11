/*
 * @Description: 经典的JS面试题
 * @Autor: hrt
 * @Date: 2019-12-16 10:23:37
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-16 10:23:51
 */
function Foo(){
  getName = function(){ console.log(1); } //会覆盖全局的 var getName
  return this;
}
Foo.getName = function(){ console.log(2); }
Foo.prototype.getName = function(){ console.log(3); }
var getName = function(){ console.log(4); }
function getName(){ console.log(5); }

Foo.getName()            //2
getName()                //4
Foo().getName()          //1
getName()                //1
new Foo.getName();       //2
new Foo().getName();     //3   new Foo() --> this.getName();
new new Foo().getName(); //3   new ( new Foo().getName() )