import React from 'react'
import ReactDOM from 'react-dom/client'
// import DemoOne from './views/DemoOne'
// import VoteFunction from './views/VoteFunction'
// import VoteClass from './views/VoteClass'
// import DemoTwo from './views/DemoTwo'
// import DemoThree from './views/DemoThree'
// import DemoFour from './views/DemoFour'
// import DemoFive from './views/DemoFive'
import DemoSix from './views/DemoSix'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <DemoSix />
  </>
)

// setTimeout(() => {
//   root.render(
//     <>
//       <VoteClass title="React is bad" />
//     </>
//   )
// }, 3000)
