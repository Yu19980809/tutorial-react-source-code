import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

// 创建一个容器
class Store {
  // 公共状态
  @observable num = 10

  // 修改公共状态的方法
  @action
  change() {
    this.num++
  }
}
let store = new Store()

// @observer
// class Demo extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{store.num}</p>
//         <button onClick={() => store.change()}>+1</button>
//       </div>
//     )
//   }
// }

// 函数组件无法使用装饰器的语法，但是可以把 observer 执行，将函数组件作为参数传入，实现的效果与装饰器相同
const Demo = observer(() =>(
  <div>
    <p>{store.num}</p>
    <button onClick={() => store.change()}>+1</button>
  </div>
))

export default Demo
