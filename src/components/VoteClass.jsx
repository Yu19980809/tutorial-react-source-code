import React from 'react'
import PropTypes from 'prop-types'

class VoteClass extends React.Component {
  // 属性规则校验
  static defaultProps = {
    num: 0
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number
  }

  // 初始化状态
  state = {
    aNum: 10,
    oNum: 5
  }

  // 生命周期函数
  UNSAFE_componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    // nextState：存储要修改的最新状态
    // this.state：修改前的状态
    console.log('should component update', this.state, nextState)
    return true
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    // 此时，状态还没发生更改
    console.log('component will update', this.state, nextState)
  }

  componentDidUpdate() {
    console.log('component did update')
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('component will receive props', nextProps)
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
    console.log('render')

    let {title} = this.props,
        {aNum, oNum} = this.state

    return (
      <div>
        <div className="header">
          <h2>{title}</h2>
          <span>{aNum + oNum}人</span>
        </div>

        <div className="main">
          <p>支持人数: {aNum}人</p>
          <p>反对人数：{oNum}人</p>
        </div>

        <div className="footer">
          <button onClick={() => this.setState({aNum: aNum + 1})}>
            支持
          </button>

          <button onClick={() => this.setState({oNum: oNum + 1})}>
            反对
          </button>

          {/* 强制更新 */}
          {/* <button onClick={() => {
            this.state.oNum++
            this.forceUpdate()
          }}>
            反对
          </button> */}
        </div>
      </div>
    )
  }
}

export default VoteClass
