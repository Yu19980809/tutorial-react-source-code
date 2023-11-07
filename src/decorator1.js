/**
 * 类的装饰器
 *  @函数
 *  class Xxx {}
 * 
 * 创建类的时候，会把装饰器函数执行
 *  + target：当前装饰的类 Xxx
 * 
 * 可以在装饰器函数中，给类设置一些静态私有的属性和方法
 * 或者设置原型上的属性和方法 
 * 
 * 同一个装饰器可以作用在多个类上
 * 同一个类上也可以使用多个装饰器
 */
const test = target => {
  // target: Demo => 此处就是给类设置静态私有属性
  target.num = 100
  target.getNum = function getNum() {}
  target.prototype.say = function say() {}
}

const sum = target => {
  target.prototype.sum = function sum() {}
}

// 可以传递不同的值，让装饰器函数有不同的效果
const test2 = (x, y) => {
  // 返回的函数就是装饰器函数
  return target => {
    target.num = x + y
  }
}

// @test
@test2(10, 20)
@sum
class Demo {}

@test
class Child {}

console.dir(Demo)
console.dir(Child)
