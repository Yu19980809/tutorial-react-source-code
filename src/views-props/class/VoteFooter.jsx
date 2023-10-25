import React from 'react'
import PropTypes from 'prop-types'

class VoteFooter extends React.PureComponent {
  // 属性规则校验
  static propTypes = {
    change: PropTypes.func.isRequired
  }

  render() {
    const {change} = this.props

    return (
      <div>
        <button onClick={() => change('sup')}>支持</button>
        <button onClick={() => change('opp')}>反对</button>
      </div>
    )
  }
}

export default VoteFooter