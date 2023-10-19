import React from 'react'
import { flushSync } from 'react-dom'

class DemoFive extends React.Component {
  state = {
    x: 15,
    y: 5,
    z: 0
  }

  // handleClick = () => {
  //   let {x, y, z} = this.state

  //   // 同时修改三个状态值，所以只会触发一次更新
  //   // this.setState({
  //   //   x: x + 1,
  //   //   y: y + 1,
  //   //   z: z + 1
  //   // }, () => console.log('set state over'))

  //   // 三次修改为异步执行，还是只会触发一次视图更新
  //   this.setState({x: x + 1})
  //   console.log(this.state.x) // 仍然还是15
  //   this.setState({y: y + 1})
  //   console.log(this.state.y) // 仍然还是5
  //   this.setState({z: z + 1})
  //   console.log(this.state.z) // 仍然还是0
  // }

  // shouldComponentUpdate() {
  //   return false
  // }

  // componentDidUpdate() {
  //   console.log('component did update')
  // }

  // handleClick = () => {
  //   let {x, y, z} = this.state
  //   this.setState({x: x + 1})
  //   this.setState({y: y + 1})
  //   console.log(this.state)

  //   setTimeout(() => {
  //     this.setState({z: z + 1})
  //     console.log(this.state)
  //   }, 1000)
  // }

  handleClick = () => {
    let {x, y} = this.state
    // flushSync 可以刷新updater更新队列，也就是让修改状态的任务立即批处理一次
    flushSync(() => {
      this.setState({x: x+ 1})
      this.setState({y: y + 1})
    })

    // 在修改z之前，要保证x和y都已经更改且让视图刷新了
    console.log(this.state) // 此时this.state已经更新了x和y的值
    this.setState({z: this.state.x + this.state.y})
  }

  render() {
    console.log('render')
    let {x, y, z} = this.state

    return (
      <div>
        x: {x}-y: {y}-z: {z}
        <br />

        <button onClick={this.handleClick}>
          +1
        </button>
      </div>
    )
  }
}

export default DemoFive
