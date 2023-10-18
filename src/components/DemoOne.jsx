import React from 'react'
import PropTypes from 'prop-types'

const DemoOne = (props) => {
  let {title, data, children} = props

  // 对children做类型处理
  // 可以基于 React.Children 对象中提供的方法，对 props.children 做处理
  // 例如：count / forEach / mao / toArray ...
  children = React.Children.toArray(children)
  let headerSlot = [],
      footerSlot = [],
      otherSlot = []
  
  children.forEach(child => {
    let {slot} = child.props
    if (slot === 'header') {
      headerSlot.push(child)
    } else if (slot === 'footer') {
      footerSlot.push(child)
    } else {
      otherSlot.push(child)
    }
  })

  return (
    <>
      {headerSlot}
      <br />

      <h2>{title}</h2>
      <span>{data}</span>

      <br />
      {footerSlot}
    </>
  )
}

// 通过把函数当作对象，设置静态的私有属性方法，来给其设置属性的校验规则
DemoOne.defaultProps = {
  data: [888]
}

DemoOne.propTypes = {
  title: PropTypes.string.isRequired, // 类型为字符串，且必传
  data: PropTypes.number, // 类型为数字
  x: PropTypes.oneOfType([  // 类型为数字和布尔值的其中一种
    PropTypes.number,
    PropTypes.bool
  ])
}

export default DemoOne
