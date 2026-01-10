import './App.css'
import Navbar from '../components/Navbar/Navbar.jsx';
import Header from '../components/Header/Header.jsx';
import About from '../components/About/About.jsx';
import Services from '../components/Services/Services.jsx';
import Footer from '../components/Footer/Footer.jsx';

function App() {
  return (
<>
  <Navbar />
  <Header button={"btn"}/>
  <Services/>
  <About txt={"About us"}/> 
  <Footer/> 
</>

  )
}

export default App
