import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Card from './Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
    <Navbar/>
    <Content nama="Ucup" membership="Platinum"/>
    <Content nama="Bambang" membership="Gold"/>
    <Content nama="Budi" membership="Silver"/>

    <h3>Yuk berlangganan sekarang</h3>
    <div className='card-wrapper'>
      <Card 
        title="Free" 
        price={0}
        list1="Gratis tanpa biaya"
        list2="Bisa melihat katalog & update terbaru"
        list3="Akses dasar ke fitur utama"
        list4="Dukungan komunitas"
        />
      <Card 
        title="Gold" 
        price={100.000}
        isPopular={true}
        list1="Prioritas pelayanan pelanggan"
        list2="Akses premium terpilih"
        list3="Promo & diskon khusus member"
        list4="Dukungan komunitas diutamakan"
        />
      <Card 
        title="Platinum" 
        price={200.000}
        list1="Akses pebuh ke seluruh fitur"
        list2="Prioritas tertinggi support & layanan"
        list3="Penawaran ekslusif & early access"
        list4="Promo & diskon khusus member"
        />
    </div>


    <Footer/>
    </>
  )
}

export default App
