import React from 'react'
import { useState } from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted by", title)
    settitle('')
  }
  const [title, settitle] = useState(' ')
  return (
    <div>
      <form onSubmit = {(e) => {
        submitHandler(e)
      }}>
        <input 
        type='text' 
        placeholder = 'Enter your name'
        value={title}
        onChange={(e) => {
          settitle(e.target.value);}}>
        </input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
