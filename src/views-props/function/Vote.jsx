import { useState } from 'react'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'

const Vote = () => {
  const [supNum, setSupNum] = useState(10)
  const [oppNum, setOppNum] = useState(5)

  const change = type => {
    type === 'sup'
    ? setSupNum(supNum + 1)
    : setOppNum(oppNum + 1)
  }

  return (
    <div>
      <p>
        <span>React is good</span>
        &nbsp;&nbsp;&nbsp;
        <span>{supNum + oppNum}</span>
      </p>
      <hr />

      <VoteMain supNum={supNum} oppNum={oppNum} />
      <VoteFooter change={change} />
    </div>
  )
}

export default Vote