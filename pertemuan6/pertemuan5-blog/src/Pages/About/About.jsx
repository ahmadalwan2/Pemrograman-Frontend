import MyNavbar from '../../Components/Navbar/Navbar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div className="d-flex min-vh-100 flex-column">
            <MyNavbar/>
        <Container className='flex-fill'>
            <h1>About PeTIK Blog</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quidem hic voluptates alias consequuntur laborum, labore veritatis, adipisci obcaecati magni beatae. Qui nisi fuga beatae accusamus alias pariatur recusandae ullam.
            </p>
        </Container>
            <Footer/>
        </div>
    )
}

export default About;