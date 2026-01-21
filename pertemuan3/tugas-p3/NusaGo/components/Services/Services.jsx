import './Services.css';
import { FaHotel } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaProcedures } from "react-icons/fa";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';





function Services() {
  return (
    <section className="services" id="services">
      <Navbar/>
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">Semua kebutuhan wisata Anda dalam satu tempat</p>

      <div className="services-grid">
        <div className="service-box">
          <div className="service-icon hotel-icon"><FaHotel size={50} color='#f9f9f9'/></div>
          <h3 className="service-name">Hotel & Resort</h3>
          <p className="service-desc">Pilihan hotel dan resort terbaik di destinasi wisata</p>
        </div>

        <div className="service-box">
          <div className="service-icon kuliner-icon"><FaCoffee size={50} color='#f9f9f9'/></div>
          <h3 className="service-name">Cafe & Resto Terbaik</h3>
          <p className="service-desc">Nikmati cita rasa kopi asli khas Lombok dan suasana resto dipinggir pantai</p>
        </div>

        <div className="service-box">
          <div className="service-icon penginapan-icon"><FaProcedures size={50} color='#f9f9f9'/></div>
          <h3 className="service-name">Penginapan VVIP</h3>
          <p className="service-desc">Berbagai pilihan penginapan nyaman dari kelas menengah hingga VVIP</p>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Services;
