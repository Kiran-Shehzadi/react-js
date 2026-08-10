import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState(10)

  const btnClicked =() => {
    setNum(prev => (prev+1))
        setNum(prev => (prev+1))
            setNum(prev => (prev+1))

  }
  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={btnClicked}>Clcik</button>
    </div>
  )
}

export default App
