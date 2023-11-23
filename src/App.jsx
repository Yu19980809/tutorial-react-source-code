import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [age, setAge] = useState(3)

  const handleClick = () => {
    setNum(prevState => prevState + 1)  // num 会更新为 1
    setAge(prevState => prevState + 1)  // age 会更新为 4
  }

  return (
    <div>
      <p>{num} - {age}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default App