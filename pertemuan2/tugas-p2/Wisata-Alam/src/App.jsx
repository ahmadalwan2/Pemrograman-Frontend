import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar/Navbar'
function App() {
  return (
    <>
      <Navbar NusaGo={"NusaGo"} home={"Home"} about={"about"} service={"service"}/>
    </>
  )
}

export default App
