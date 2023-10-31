import React from 'react'
import { Button } from 'antd'
// import { connect } from 'react-redux'
import { connect } from '@/utils/myReactRedux.js'
// import { bindActionCreators } from 'redux'
import action from '@/store/actions'

const VoteFooter = ({ support, oppose }) => {
  return (
    <div className="footer">
      <Button type="primary" onClick={support}>支持</Button>
      <Button type="primary" danger onClick={oppose}>反对</Button>
    </div>
  )
}

export default connect(null, action.vote)(VoteFooter)

// export default connect(
//   null,
//   dispatch => {
//     console.log(String(bindActionCreators(action.vote, dispatch).support))

//     return {
//       support() {
//         dispatch(action.vote.support())
//       },
//       oppose() {
//         dispatch(action.vote.oppose())
//       }
//     }
//   }
// )(VoteFooter)

/**
 * connect(mapStateToProps, mapDispatchToProps)(要渲染的组件)
 *  + mapDispatchToProps：把需要派发的任务作为 props 属性传递给要渲染的组件
 *    ++ connect(null, dispatch => {
 *        // dispatch => store.dispatch
 *        // 返回的对象会作为 props 属性传递给要渲染的组件 
 *        return {...}
 *       })(Vote)
 */
