import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h1>To-do List :</h1>
      <ol>
        <li>Mengerjakan tugas front end</li>
        <li>Mempelajari tutorial react js</li>
        <li>Mengulang-ulang materi JavaScript</li>
      </ol>
      <Profile/>
      <img src="https://picsum.photos/200/300" alt="Tidak mendukung diperangkat anda" />
      <Footer nama="wan.studio"/>
    </>

  )
}

export default App
