// 把各个模块的 action 合并为一个 action
import voteAction from './voteAction'
import personAction from './personAction'

const action = {
  vote: voteAction,
  person: personAction
}

export default action
