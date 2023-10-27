// import { createStore } from '../utils/myRedux'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

export default store
