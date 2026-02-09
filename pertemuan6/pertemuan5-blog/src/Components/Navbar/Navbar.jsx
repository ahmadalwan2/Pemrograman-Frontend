import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
    return (
      <div>
        
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to={"/"}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
             <NavLink to={"/about"}>About</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to={"/post"}>Post</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to={"/post/detail"}>Blog</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
  
  export default MyNavbar;
  