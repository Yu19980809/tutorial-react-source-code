import React from 'react'

class DemoOne extends React.Component {
  handleClick1() {
    console.log(this) // 输出undefined
  }

  handleClick2() {
    console.log(this) // 输出 DemoOne 实例
  }

  handleClick3 = e => {
    console.log(this) // 输出 DemoOne 实例
    console.log(e)  // 输出合成事件对象（SyntheticBaseEvent）
                    // 是React内部经过特殊处理，把各个浏览器的事件对象统一化后，构建的一个事件对象
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>
          Undefined
        </button>

        <button onClick={this.handleClick2.bind(this)}>
          Bind
        </button>

        <button onClick={this.handleClick3}>
          Arrow
        </button>
      </div>
    )
  }
}

export default DemoOne
