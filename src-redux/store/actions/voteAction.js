import * as TYPES from '../actionTypes'

const voteAction = {
  support() {
    return {
      type: TYPES.VOTE_SUP
    }
  },
  oppose() {
    return {
      type: TYPES.VOTE_OPP
    }
  }
}

export default voteAction
