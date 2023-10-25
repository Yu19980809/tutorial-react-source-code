import { useContext } from 'react'
import themeContext from '../../themeContext'

const VoteFooter = () => {
  console.log('footer render')
  const {change} = useContext(themeContext)

  return (
    <div>
      <button onClick={() => change('sup')}>支持</button>
      <button onClick={() => change('opp')}>反对</button>
    </div>
  )
}

export default VoteFooter