import React from 'react'
import ReactDOM from 'react-dom/client'
// import DemoOne from './components/DemoOne'
// import VoteFunction from './components/VoteFunction'
// import VoteClass from './components/VoteClass'
import DemoTwo from './components/DemoTwo'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <DemoTwo />
  </>
)

// setTimeout(() => {
//   root.render(
//     <>
//       <VoteClass title="React is bad" />
//     </>
//   )
// }, 3000)
