// 合并各个模块的 reducer
// import { combineReducers } from 'redux'
import combineReducers from '@/utils/myCombineReducers'
import voteReducer from './voteReducer'
import personReducer from './personReducer'

/**
 * 合并后，容器中的公共状态，会按照设置的成员名称分模块进行管理
 * state = {
 *  vote: {...},
 *  person: {...}
 * }
 */
const reducer = combineReducers({
  vote: voteReducer,
  person: personReducer
})

export default reducer
