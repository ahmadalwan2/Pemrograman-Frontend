import { Component, useState } from 'react'
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
      <Footer />
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

class Footer extends Component {
    render() {
      return (
        <footer>
          <h3>Copyright &copy;2026 Developed by wanix.studio</h3>
          <span>Make with &#220052</span>
        </footer>
      )
    }
}
export default App
