import './Error.css';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

function ErrorPage() {
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <h1 className='title'>404</h1>
                <p className='text'>Not Found</p>
            </div>
            <Footer/>
        </div>
    ) 
}

export default ErrorPage;