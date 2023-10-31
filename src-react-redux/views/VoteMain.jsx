import React from 'react'
// import { connect } from 'react-redux'
import { connect } from '@/utils/myReactRedux.js'

class VoteMain extends React.Component {
  render() {
    const {supNum, oppNum} = this.props

    return (
      <div className="main">
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
      </div>
    )
  }
}

export default connect(state => state.vote)(VoteMain)