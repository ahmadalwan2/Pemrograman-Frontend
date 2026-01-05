import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from '../../pertemuan2/tugas-p2/Wisata-Alam/components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Content nama="Ucup" membership="Platinum"/>
    <Content nama="Bambang" membership="Gold"/>
    <Content nama="Budi" membership="Silver"/>
    <Footer/>
    </>
  )
}

export default App
