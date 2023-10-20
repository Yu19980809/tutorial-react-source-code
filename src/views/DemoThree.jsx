import React from 'react'

class DemoThree extends React.Component {
  // 手指按下: 记录手指按下位置的起始坐标
  touchstart = e => {
    let touchLocation = e.changedTouches[0]
    this.touch = {
      startX: touchLocation.pageX,
      startY: touchLocation.pageY,
      isMove: false
    }
  }

  // 手指移动: 记录手指位置偏移值，和误差值做对比，分析出是否发生了移动
  touchmove = e => {
    let touchLocation = e.changedTouches[0],
        {startX, startY} = this.touch
    let changeX = touchLocation.pageX - startX,
        changeY = touchLocation.pageY - startY

    if (Math.abs(changeX) > 10 || Math.abs(changeY) > 10) {
      this.touch.isMove = true
    }
  }

  // 手指离开: 根据 isMove 判断是否是点击
  touchend = () => {
    let {isMove} = this.touch
    if (isMove) return

    console.log('clicked')
  }

  render() {
    return (
      <div>
        <button
          onTouchStart={this.touchstart}
          onTouchMove={this.touchmove}
          onTouchEnd={this.touchend}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default DemoThree
