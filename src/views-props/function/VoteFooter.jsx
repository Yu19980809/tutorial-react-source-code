import PropTypes from 'prop-types'

const VoteFooter = props => {
  console.log('footer render')
  const {change} = props

  return (
    <div>
      <button onClick={() => change('sup')}>支持</button>
      <button onClick={() => change('opp')}>反对</button>
    </div>
  )
}

// 属性规则校验
VoteFooter.propTypes = {
  change: PropTypes.func.isRequired
}

export default VoteFooter