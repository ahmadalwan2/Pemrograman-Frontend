import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <h1>To-do List :</h1>
      <ol>
        <li>Mengerjakan tugas front end</li>
        <li>Mempelajari tutorial react js</li>
        <li>Mengulang-ulang materi JavaScript</li>
      </ol>
    </>
  )
}

function Header() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>
    )
}

export default App
