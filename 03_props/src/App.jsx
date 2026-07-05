import React from 'react'
import Card from "./components/Card.jsx"
const App = () => {
  return (
    <div className='parent'>
      <Card  user="Aman singh" age={21} img="https://plus.unsplash.com/premium_photo-1781227798890-ed3b66fdef54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Hardik" age={18} img="https://images.unsplash.com/photo-1782077919177-31a8fbcbf438?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
       </div> 
    
  )
}

export default App