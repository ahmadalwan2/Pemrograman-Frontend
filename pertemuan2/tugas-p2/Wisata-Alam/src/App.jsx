import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
function App() {
  return (
    <>
      <Navbar NusaGo={"NusaGo"} home={"Home"} about={"about"} service={"service"}/>

      <Header Hero={"Selamat Datang di Website Kami"}/>

      <About about={ "NusaGo adalah sebuah website wisata alam yang menyediakan beberapa layanan terbaik sepanjang masa" }/>

      <Footer footer={"Copyright &copy;2026 Developed by NusaGo ❤️"}/>
    </>
  )
}

export default App
