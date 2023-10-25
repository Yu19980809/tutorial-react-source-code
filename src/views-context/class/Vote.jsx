import React from 'react'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'
import themeContext from '../../themeContext'

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
      <themeContext.Provider
        value={{
          supNum,
          oppNum,
          change: this.change
        }}
      >
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
      </themeContext.Provider>
    )
  }
}

export default Vote