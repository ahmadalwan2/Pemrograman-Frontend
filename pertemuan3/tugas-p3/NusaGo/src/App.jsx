import './App.css'
import Header from '../components/Header/Header.jsx';
import About from '../components/About/About.jsx';
import Services from '../components/Services/Services.jsx';
import ErrorPage from '../components/Error/Error.jsx';
import Search from '../components/Search/Search.jsx';
import Add from '../components/Add/Add.jsx';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/movie" element={<Add/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>

  )
};

export default App
