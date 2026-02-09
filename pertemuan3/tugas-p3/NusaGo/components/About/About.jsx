import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { FaStar } from "react-icons/fa6";
import './About.css';


function About() {
  return (
    <section className="about" id="about">
      <Navbar/>
      <div className="about-container">
        <h2 className="about-title">About us</h2>
        <p className="about-text">
          NusaGO hadir untuk membantu Anda menjelajahi keindahan alam Indonesia. 
          <br />Kami menyediakan informasi destinasi wisata, hotel, kuliner, dan penginapan 
          yang sempurna untuk petualangan Anda.
        </p>

        <div className="about-imgs">
          <img src="/img/04.jpg" alt="Destinasi 1" />
          <img src="/img/05.jpg" alt="Destinasi 2" />
          <img src="/img/06.jpg" alt="Destinasi 3" />
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <h3 className="stat-number">120,000+</h3>
            <p className="stat-label">Total Pengunjung</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">325</h3>
            <p className="stat-label">Total Destinasi</p>
          </div>
          <div className="stat-box">
            <div className="star-wrapper">
            <span className="stat-number">4.9</span>
            <span className='star-icon'>
              <FaStar size={28}/>
            </span>
            </div>
            <p className="stat-label">Rating Pengguna</p>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default About;
