import React from 'react'

class Child1 extends React.Component {
  render() {
    return (
      <p>Child1</p>
    )
  }
}

const Child2 = React.forwardRef((props, ref) => (
  <div>
    <p>Child2</p>
    <p ref={ref}>hello</p>
  </div>
))

class DemoFour extends React.Component {
  componentDidMount() {
    // console.log(this.child1)  // 输出的是类组件Child1的实例
    console.log(this.child2)  // 输出的是函数组件中设置了ref的元素
  }

  render() {
    return (
      <div>
        <Child1 ref={x => this.child1 = x} />
        <Child2 ref={x => this.child2 = x} />
      </div>
    )
  }
}

export default DemoFour
