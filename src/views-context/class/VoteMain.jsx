import React from 'react'
import themeContext from '../../themeContext'

class VoteMain extends React.Component {
  // 从上下文对象中获取信息
  static contextType = themeContext

  render() {
    const {supNum, oppNum} = this.context
    const total = supNum + oppNum
    let ratio = '--'
    if (total > 0) ratio = (supNum / total * 100).toFixed(2) + '%'

    return (
      <div>
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
        <p>支持比率：{ratio}</p>
      </div>
    )
  }
}

export default VoteMain