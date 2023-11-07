/* 类中属性/方法的装饰器 */

// 在给实例设置私有属性的时候，触发装饰器函数执行，以此来给属性进行装饰
// const test = (target, name, descriptor) => {
//   // target => Demo.prototype
//   // name => 'x'
//   // descriptor => {configurable: true, enumerable: true, writable: true, initializer: ƒ}
//   // console.log('target', target)
//   // console.log('name', name)
//   // console.log('descriptor', descriptor)

//   // target => Demo.prototype
//   // name => 'getX'
//   // descriptor => {writable: true, enumerable: false, configurable: true, value: ƒ}
//   console.log('target', target)
//   console.log('name', name)
//   console.log('descriptor', descriptor)
// }

// class Demo {
//   // @test x = 100
//   @test
//   x = 100

//   @test
//   getX() {}
// }

// let d = new Demo()
// console.log(d)

// 创建只读属性的装饰器
const readonly = (_, name, descriptor) => {
  // 把修饰的 name 属性/方法设置为只读
  descriptor.writable = false
}

// 创建记录执行时间日志的修饰器
const loggerTime = (_, name, descriptor) => {
  // 把之前写的函数（即 getX() {}）赋值给 func
  const func = descriptor.value
  // 然后把之前写的函数（即 getX() {}）进行重写
  descriptor.value = function proxy(...params) {
    console.time(name)
    const res = func.call(this, ...params)
    console.timeEnd(name)
    return res
  }
}

class Demo {
  @readonly
  x = 100

  @loggerTime
  getX() {
    return this.x
  }
}

let d = new Demo()
// d.x = 200
console.log(d.getX(10, 20))
