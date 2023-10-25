import React from 'react'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'

class Vote extends React.Component {
  state = {
    supNum: 10,
    oppNum: 5
  }

  change = type => {
    let {supNum, oppNum} = this.state
    type === 'sup'
    ? this.setState({supNum: supNum + 1})
    : this.setState({oppNum: oppNum + 1})
  }

  render() {
    const {supNum, oppNum} = this.state

    return (
      <div>
        <p>
          <span>React is good</span>
          &nbsp;&nbsp;&nbsp;
          <span>{supNum + oppNum}</span>
        </p>
        <hr />

        <VoteMain supNum={supNum} oppNum={oppNum} />
        <VoteFooter change={this.change} />
      </div>
    )
  }
}

export default Vote