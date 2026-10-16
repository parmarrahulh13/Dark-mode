import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
