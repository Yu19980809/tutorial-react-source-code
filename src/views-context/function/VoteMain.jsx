import { useContext } from 'react'
import themeContext from '../../themeContext'

// const VoteMain = () => {
//   return (
//     <themeContext.Consumer>
//       {context => {
//         const {supNum, oppNum} = context
//         return (
//           <div>
//             <p>支持人数：{supNum}</p>
//             <p>反对人数：{oppNum}</p>
//           </div>
//         )
//       }}
//     </themeContext.Consumer>
//   )
// }

const VoteMain = () => {
  const {supNum, oppNum} = useContext(themeContext)

  return (
    <div>
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
    </div>
  )
}

export default VoteMain