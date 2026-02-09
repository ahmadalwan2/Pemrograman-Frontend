import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function myNavbar() {
    return (
        <div>
            <Navbar className="p-4" bg="success" data-bs-theme="dark">
                    <Navbar.Brand as={NavLink} to="/">Ahgoda</Navbar.Brand>
                    
            <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/search">Search</Nav.Link>
            </Nav>
            </Navbar>
        </div>

    )
}

export default myNavbar;