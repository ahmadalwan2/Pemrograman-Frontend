import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div>
        <footer className='bg-primary'>
            <Container>
                <Row className='text-center text-white text-md-start p-5'>
                    <Col md={4}>
                    <h5>PeTIK Blog</h5>
                    <p>
                        Pesantren PeTIK adalah lembaga pendidikan yang mengintegrasikan ilmu agama dan teknologi informasi. 
                    </p>
                    </Col>
                    <Col md={4}>
                    <h5  className='fw-bold'>Quick Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <NavLink to={"/"} className="text-white text-decoration-none">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"} className="text-white text-decoration-none">About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/post"} className="text-white text-decoration-none">Post</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                    <h5>Contact Us</h5>
                    <p>
                        Jl. Mandor Basar No.54, Rangkapan Jaya, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16434
                    </p>
                    <p className='small'>Phone : (021) 77886691</p>
                    <p className='small'>Email : info@petik.or.id</p>
                    </Col>                                        
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer;
