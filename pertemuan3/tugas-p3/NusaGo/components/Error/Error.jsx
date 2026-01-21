import './Error.css';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
        const navigate = useNavigate();
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <h1 className='title'>404</h1>
                <p className='text'>Halaman tidak tersedia</p>
                <div className='btn'>
                <button onClick={() => navigate (-1)}>Kembali</button>
                </div>
            </div>
            <Footer/>
        </div>
    ) 
}

export default ErrorPage;