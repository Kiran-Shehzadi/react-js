import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const getData = async() => {
const response= await  axios.get('https://jsonplaceholder.typicode.com/todos/1')
setData(response.data)

  }
  return (
    <div>
    <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
