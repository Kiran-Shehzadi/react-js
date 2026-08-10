import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
           <Card  user="Kiran Shehzadi" age = {21}/>
           <Card  user="Hira Zaheer" age = {23}/>
            <Card  user="Ayesha Zaheer" age = {28}/>

    </div>
  )
}

export default App
