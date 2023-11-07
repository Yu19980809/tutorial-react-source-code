/**
 * Object.defineProperty(obj, key, descriptor)
 *  + 1. 设置对象中某个成员的规则
 *    ++ 如果成员存在，则修改其规则
 *    ++ 如果成员不存在，则新增该成员（默认所有规则都是 false）
 * 
 *  + 2. 数据劫持
 * 
 * Object.getOwnPropertyDescriptor(对象，成员) ⇒ 获取对象中某个成员的规则
 * Object.getOwnPropertyDescriptors(对象) ⇒ 获取对象中所有成员的规则
 */

let obj = {
  x: 10,
  y: [1, 3, 5]
}

// x 成员已存在，故修改其规则
// Object.defineProperty(obj, 'x', {
//   configurable: false,
//   enumerable: false,
//   writable: false
// })

// z 成员不存在，故新增该成员（默认所有规则都是 false）
// Object.defineProperty(obj, 'z', {})

// console.log(Object.getOwnPropertyDescriptors(obj))
// console.log(Object.getOwnPropertyDescriptor(obj, 'x'))

// 数据劫持
Object.defineProperty(obj, 'x', {
  get() {
    // 后续获取 obj.x 成员信息时，就会触发这个 get 函数执行
    // 返回内容就是成员值
    console.log('get')
    return 'hello'
  },
  set(val) {
    // 设置成员值的时候，会触发这个 set 函数
    // val 就是要设置的值
    console.log('set', val)
  }
})

obj.x = 200
console.log(obj.x)
