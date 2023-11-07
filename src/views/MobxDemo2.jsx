import {
  observable,
  autorun,
  reaction,
  observe,
  computed,
  action,
  configure,
  runInAction
} from 'mobx'

// mobx 的全局配置
configure({
  // 强制使用 action 方法的模式去修改状态，不允许单独基于实例去修改状态
  enforceActions: 'observed'
})

class Store {
  @observable x = 10
  @observable y = 20

  // action：修饰函数的装饰器，让函数中的状态更改变为“异步批处理”
  // action.bound：保证函数 change 如何执行，函数中的 this 都是 Store 的示例
  @action.bound change() {
    this.x = 1000
    this.y = 2000
  }
}
let store = new Store()

autorun(() => {
  console.log('autorun', store.x, store.y)
})

setTimeout(() => {
  // 修改多个状态，会让 autorun 监听器执行多次
  // store.x = 1000
  // store.y = 2000

  // store.change()  // this => store
  // let func = store.change
  // func()  // 没有设置 bound 则 this => undefined；设置了 bound，则 this => store

  // 基于 runInAction 可以实现出和 @action 一样的效果
  runInAction(() => {
    store.x = 1000
    store.y = 2000
  })
}, 1000)

// -------------------------------------------

// class Store {
//   @observable x = 10
//   @observable count = 3
//   @observable price = 99
//   // 创建一个具备计算缓存的计算属性(注意：是属性，不是方法)
//   @computed get total() {
//     console.log('total')
//     return this.count * this.price
//   }
// }
// let store = new Store()

// autorun(() => {
//   console.log('autorun: ', store.x, store.total)
// })

// reaction 和 autorun 一样，都是监听器
// 但是能够提供更细粒化的状态监测(如指定要监测的状态值)，且默认是不会执行的
// reaction(
//   () => [store.x, store.total],
//   () => {
//     console.log('reaction: ', store.x, store.total)
//   }
// )

// setTimeout(() => {
//   store.x = 1000  // total 计算属性不会重新计算，使用之前缓存的结果
//   // store.count = 5  // total 计算属性会重新执行，计算出新的结果
// }, 1000)

// -------------------------------------------

// 经过 observable 处理后的数据，是基于 ES6 Proxy 做了数据劫持的
// 这样在后期修改状态值时，就可以在 set 函数中做一些特殊处理
// 例如：把依赖该状态值的监听器触发执行
// let obj = observable({
//   x: 10,
//   y: 20
// })

// 创建监听器，当对象中的某个成员发生变化，触发回调函数执行
// 前提：对象已经基于 observable 设置为可监听了
// observe(obj, change => {
//   console.log(change)
// })
// obj.x = 100

// -------------------------------------------

// observable 无法直接装饰原始值，需要使用 observable.box 处理
// let x = observable.box(10)
// console.log(x)  // ObservableValue
// console.log(x.get())  // 获取 x 的值

// observe(x, change => {
//   console.log(change)
// })
// x.set(1000)

// -------------------------------------------

// class Store {
//   @observable x = 10
// }
// let store = new Store()

// autorun(() => {
//   // 首先会立即执行一遍，自动建立起依赖监测（监测用到的状态）
//   // 当依赖的状态值发生变化，callback 会重新执行
//   console.log('autorun: ', store.x)
// })

// setTimeout(() => {
//   store.x = 20
// }, 1000)

// -------------------------------------------

// ES6中的内置API：Proxy (这就是 mobx>=5 不支持IE的原因)
// 对某个对象进行数据劫持和代码：这样就可以在操作对象成员的时候，触 get/set 函数，做一些操作
// let obj = {
//   x: 10,
//   y: 20
// }

// let proxyObj = new Proxy(obj, {
//   get(target, key) {
//     console.log('GETTER')
//     return target[key]
//   },
//   set(target, key, val) {
//     console.log('SETTER')
//     target[key] = val
//     return key
//   }
// })

// console.log(proxyObj) // 返回的代理对象是劫持的
// console.log(proxyObj.x) // 获取某个成员值的时候会触发 get 函数
// proxyObj.x = 100  // 设置某个成员值的时候会触发 set 函数
