import React from 'react'

class DemoThree extends React.Component {
  box3 = React.createRef()

  componentDidMount() {
    // console.log(document.querySelector('.title'))
    // console.log(this.refs.titleBox)
    // console.log(this.content)
    console.log(this.box3.current)
  }

  render() {
    return (
      <div>
        <h2 className="title" ref="titleBox">Demo Three</h2>
        <p ref={x => this.content = x}>hello</p>
        <p ref={this.box3}>hi</p>
      </div>
    )
  }
}

export default DemoThree
