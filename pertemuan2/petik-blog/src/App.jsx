import './App.css'
import { Component, useState } from 'react'
import reactLogo from '../src/assets/react.svg'
import viteLogo from '../../petik-blog/public/vite.svg'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Customer from './components/Customer/Customer.jsx'


function App() {
  return (
    <>
    {/* <Header nama="Selamat Datang" tentang="Asal Depok"/> */}
      <Customer tag="Our Customer"/>
      <Customer nama="Ucup" alamat={"Depok"} member={"Gold"} />
      <Customer nama="Raja" alamat={"Jakarta"} member={"Silver"} />
      <Customer nama="Aldi" alamat={"Bandung"} member={"Platinum"} />
      <Customer nama="Alex" alamat={"Depok"} member={"Non member"} />
    <Footer nama="wan.studio"/>
    </>

  )
}


export default App
