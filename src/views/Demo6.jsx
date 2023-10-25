import React from 'react'

class DemoSix extends React.Component {
  state = {
    x: 0
  }

  handleClick = () => {
    for (let i = 0; i < 20; i++) {
      // this.setState({x: this.state.x + 1})
      this.setState(prev => {
        return {x: prev.x + 1}
      })
    }
  }

  render() {
    console.log('render')
    let {x} = this.state

    return (
      <div>
        x: {x}
        <br />

        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

export default DemoSix
