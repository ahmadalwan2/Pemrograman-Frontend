import "./Search.css";
import Navbar from "../Navbar/Navbar.jsx";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Footer from "../Footer/Footer.jsx";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <>
    <Navbar/>
      <input
        type="text"
        placeholder="Cari destinasi..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "12px 18px",
          margin: "20px auto",
          display: "block",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <div className="Card-container">
        {"hotel vvip".includes(query.toLowerCase()) && (
          <div className="Card-body">
            <img src="../../public/img/07.jpg" alt="Hotel VVIP" />
            <p>Hotel VVIP</p>
            <small className="desc">Rp.200,00 | Permalam</small>
            <span>Hotel VVIP dengan private pool, layanan eksklusif, dan sunset Bali yang memukau</span>
            <div className="icons">
              <FaStar size={18}/><FaStar size={18}/><FaStar size={18}/><FaStar size={18}/><FaStar size={18}/>
              <button>Selengkapnya</button>
            </div>
          </div>
        )}

        {"villa borneo".includes(query.toLowerCase()) && (
          <div className="Card-body">
            <img src="../../public/img/07.jpg" alt="Villa Borneo" />
            <p>Villa Borneo</p>
            <small className="desc">Rp.900,00 | Permalam</small>
            <span>Villa Borneo menghadirkan nuansa budaya nusantara dalam suasana tenang dan alami</span>
            <div className="icons">
              <FaStar size={18}/><FaStar size={18}/><FaStar size={18}/><FaStar size={18}/><FaStar size={18}/>
            </div>
            <button>Selengkapnya</button>
          </div>
        )}

        {"gunung bromo".includes(query.toLowerCase()) && (
          <div className="Card-body">
            <img src="../../public/img/07.jpg" alt="Gunung Bromo" />
            <p>Gunung Bromo</p>
            <small className="desc">Rp.200,00 | Permalam</small>
            <span>Ikon wisata Jawa Timur dengan sunrise legendaris, lautan pasir luas, dan kawah aktif yang menakjubkan</span>
            <div className="icons">
              <FaStar size={18}/><FaStar size={18}/><FaStar size={18}/><FaStar size={18}/><FaStar size={18}/>
              <button>Selengkapnya</button>
            </div>
          </div>
        )}
      </div>
          <Footer/>
    </>
  );
}

export default Search;
