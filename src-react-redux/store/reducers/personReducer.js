import * as TYPES from '../actionTypes'

const initial = {
  num: 100,
  info: null
}

export default function personReducer(state = initial, action) {
  state = {...state}

  switch(action.type) {
    case TYPES.PERSON_INFO:
      state.info = action.payload
      break
    default:
  }

  return state
}
