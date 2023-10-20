import React from 'react'

class DemoTwo extends React.Component {
  componentDidMount() {
    document.addEventListener('click', () => console.log('document capture'), true)
    document.addEventListener('click', () => console.log('document bubble'), false)
  
    const root = document.querySelector('#root')
    root.addEventListener('click', () => console.log('root capture'), true)
    root.addEventListener('click', () => console.log('root bubble'), false)
  
    const outer = document.querySelector('.outer')
    outer.addEventListener('click', () => console.log('outer capture'), true)
    outer.addEventListener('click', () => console.log('outer bubble'), false)

    const inner = document.querySelector('.inner')
    inner.addEventListener('click', () => console.log('inner capture'), true)
    inner.addEventListener('click', () => console.log('inner bubble'), false)
  }

  render() {
    return (
      <div
        className="outer"
        onClick={() => console.log('outer bubble [synthetic]')}
        onClickCapture={() => console.log('outer capture [synthetic]')}
      >
        <div
          className="inner"
          onClick={(e) => {
            // 合成事件中的“阻止事件传播”：阻止原生事件的传播 & 阻止合成事件的传播
            // e.stopPropagation()
            // 原生事件中的“阻止事件传播”：只能阻止原生事件的传播
            // e.nativeEvent.stopPropagation()
            console.log('inner bubble [synthetic]')
          }}
          onClickCapture={() => console.log('inner capture [synthetic]')}
        />
      </div>
    )
  }
}

export default DemoTwo
