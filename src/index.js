import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createElement, render } from './utils/jsxHandler'

const root = ReactDOM.createRoot(document.getElementById('root'))

const x = '10', y = 20
const styleObj = {
  color: 'pink',
  fontSize: '24px'
}

// 使用自己实现的 createElement 方法创建 virtualDOM
// console.log(
//   createElement(
//     'div',
//     {className: 'container'},
//     createElement(
//       'h2',
//       {className: 'title', style: styleObj},
//       'Hello'
//     ),
//     createElement(
//       'div',
//       null,
//       createElement('span', null, x),
//       createElement('span', null, y)
//     )
//   )
// )

// 使用内置的 React.createElement 创建 virtualDOM
// console.log(
//   React.createElement(
//     'div',
//     {className: 'container'},,
//     React.createElement(
//       'h2',
//       {className: 'title', style: styleObj},
//       'Hello'
//     ),
//     React.createElement(
//       'div',
//       null,
//       React.createElement('span', null, x),
//       React.createElement('span', null, y)
//     )
//   )
// )

// 使用内置的 render 方法渲染DOM
// root.render(
//   <React.StrictMode>
//     <div className="container">
//       <h2 className="title" style={styleObj}>Hello</h2>
//       <div>
//         <span>{x}</span>
//         <span>{y}</span>
//       </div>
//     </div>
//   </React.StrictMode>
// )

// 使用自己实现的 render 方法渲染DOM
let jsxObj = createElement(
  'div',
  {className: 'container'},
  createElement(
    'h2',
    {className: 'title', style: styleObj},
    'Hello'
  ),
  createElement(
    'div',
    null,
    createElement('span', null, x),
    createElement('span', null, y)
  )
)
console.log(jsxObj)
render(jsxObj, document.getElementById('root'))
