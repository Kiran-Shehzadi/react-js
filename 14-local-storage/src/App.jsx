import React from 'react'

const App = () => {
  const usern = {
    username: 'kiran',
    age: 21,
    city: 'sialkot'
  }
  localStorage.setItem('usern', JSON.stringify(usern))
  console.log('usern');
  
const user = localStorage.setItem
  return (
    <div>
      App
    </div>
  )
}


export default App
