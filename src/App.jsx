import {useState} from 'react'
import Navbar from './Navbar'
import Home from './Home'

import './App.css'

function App() {
  const [background,Setbackground] = useState('white');

  function changebackground(){
    Setbackground('black');
  }

  return (
    <>
      <Navbar changeBackground={changeBackground} />
      <Home background={background} />
    </>
  )
}

export default App
