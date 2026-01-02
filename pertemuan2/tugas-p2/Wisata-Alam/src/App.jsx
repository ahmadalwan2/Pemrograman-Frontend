import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Customer from '../components/Customer/Customer'
function App() {
  return (
    <>
      <Navbar NusaGo={"NusaGo"} home={"Home"} about={"about"} service={"service"}/>

      <Header Hero={"Selamat Datang di Website Kami"}/>

      <Header imgSrc={"https://picsum.photos/200/300"} imgAlt={"Gambar ini tidak mendukung di perangkat anda"} />

      <About about={ "NusaGo adalah sebuah website wisata alam yang menyediakan beberapa layanan terbaik sepanjang masa" }/>

      <Customer p={"Harga Tiket Masuk Wisata Depok:"} c1={"Wisata Depok/1 - Rp.15.000"} c2={"Wisata Depok/2 - Rp.10.000"} c3={"Curug Pekayon - Rp.30.000"}/>

      <Footer footer={"Copyright &copy;2026 Developed by NusaGo ❤️"}/>
    </>
  )
}

export default App
