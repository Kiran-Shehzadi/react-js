import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)

  function increaseNum(){
    setNum(Num+1)
  }
  function decreaseNum(){
    setNum(Num-1)
  }
  function jump5Num(){
    setNum(Num+5)
  }
  function jumplow5Num(){
    setNum(Num-5)
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Increase by 5</button>
      <button onClick={jumplow5Num}>Decrease by 5</button>
    </div>
  )
}

export default App
