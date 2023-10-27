import React from 'react'
import themeContext from '../themeContext'

class VoteMain extends React.Component {
  static contextType = themeContext

  componentDidMount() {
    const {store} = this.context
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const {store} = this.context
    const {supNum, oppNum} = store.getState().vote

    return (
      <div className="main">
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
      </div>
    )
  }
}

export default VoteMain