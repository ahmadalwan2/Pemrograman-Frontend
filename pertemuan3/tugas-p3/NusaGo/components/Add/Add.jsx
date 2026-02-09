import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import {Form} from 'react-bootstrap';

function Add () {
  return (
    <div className='d-flex min-vh-100 flex-column'>
        <Navbar/>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Masukkan Email</Form.Label>
                    <Form.Control type="email" placeholder="nama@example.com"/>
                </Form.Group>
            </Form>
        <h1>Hai</h1>
        <Footer/>
    </div>
  )
}

export default Add;
