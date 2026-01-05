import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Card from './CardFree/CardFree'

function App() {
  return (
    <>
    <Navbar/>
    <Content nama="Ucup" membership="Platinum"/>
    <Content nama="Bambang" membership="Gold"/>
    <Content nama="Budi" membership="Silver"/>

    <h3>Yuk membership sekarang</h3>
    <div className='container'>
    <Card type="Free" 
    month="Rp0K" 
    payment="/Month" 
    list1="AI advisor every day" 
    list2="2 auto tracking" 
    list3="7 Day transaction clearing" 
    list4="24/7 Customer support"
    />

    <Card type="Premium" 
    month="Rp150K"
    payment="/Month"
    list1="AI advisor full time" 
    list2="Unlimited auto tracking" 
    list3="1 Day transaction clearing" 
    list4="Priority customer support"
    />

    <Card type="Enterpice" 
    month="Rp180K" 
    list1="AI advisore fulll time" 
    list2="Unlimited auto tracking" 
    list3="1 Day transaction clearing" 
    list4="Priority customer support"
    />
    </div>

    <Footer/>
    </>
  )
}

export default App
