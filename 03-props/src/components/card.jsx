import React from 'react'

const Card = (props) => {
  return (
      <div className='card'>
             <img src = "https://images.unsplash.com/photo-1677080946126-99bbc7b19747?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = "image"></img>
             <h1>{props.user}, {props.age}</h1>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus!</p>
             <button>View Profile</button>
      </div>
  )
}

export default Card
