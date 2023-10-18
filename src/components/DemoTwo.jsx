import React from 'react'

//检测是否为对象
const isObject = obj => {
  return obj !== null && /^(object|function)$/.test(typeof obj)
}

// 浅比较两个对象是否相等
const isShallowEqual = (objA, objB) => {
  if (!isObject(objA) || !isObject(objB)) return false
  if (objA === objB) return true

  // 先比较成员数量
  let keysA = Reflect.ownKeys(objA),
      keysB = Reflect.ownKeys(objB)
  if (keysA.length !== keysB.length) return false

  // 数量一致，再逐一比较内部成员（只比较第一级）
  const len = keysA.length
  for (let i = 0; i < len; i++) {
    const key = keysA[i]
    // 如果一个对象中有这个成员，另一个对象中没有
    // 或者，都有这个成员，但是成员值不一样
    // 则，都被判为不相同
    if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) return false
  }

  // 以上都处理完，发现没有不相同的成员，则认为两个对象是相等的
  return true
}

// {
//   let obj = { z: 20 }
//   let objA = {
//     x: 10,
//     y: obj,
//     arr: [10, 20, 30]
//   }
//   obj.n = 50
//   let objB = {
//     x: 10,
//     y: obj,
//     arr: [10, 20, 30]
//   }
//   console.log(isShallowEqual(objA, objB))
// }

class DemoTwo extends React.PureComponent {
  state = {
    arr: [10, 20, 30]
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   let {props, state} = this
  //   return !isShallowEqual(props, nextProps) || !isShallowEqual(state, nextState)
  // }

  render() {
    let {arr} = this.state

    return (
      <div>
        {arr.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <button onClick={() => {
          const len = arr.length
          arr.push(arr[len - 1] + arr[0]) // arr的堆内存地址没有变化

          // 无法更新
          // this.setState({arr})

          // 解决方案一：强制更新
          // this.forceUpdate()

          // 解决方案二：将arr状态值改为一个新的数组（堆内存地址）
          this.setState({arr: [...arr]})
        }}>
          One More
        </button>
      </div>
    )
  }
}

export default DemoTwo
