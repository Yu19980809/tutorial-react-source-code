import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

const VoteMain = props => {
  const {supNum, oppNum} = props

  // 计算缓存
  const ratio = useMemo(() => {
    const total = supNum + oppNum
    let ratio = '--'
    if (total > 0) ratio = (supNum / total * 100).toFixed(2) + '%'
    return ratio
  }, [supNum, oppNum])

  return (
    <div>
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      <p>支持比率：{ratio}</p>
    </div>
  )
}

// 属性规则校验
VoteMain.defaultProps = {
  supNum: 0,
  oppNum: 0
}

VoteMain.propTypes = {
  supNum: PropTypes.number,
  oppNum: PropTypes.number
}

export default VoteMain