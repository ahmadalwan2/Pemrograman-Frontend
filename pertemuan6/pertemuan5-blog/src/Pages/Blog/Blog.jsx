import MyNavbar from "../../Components/Navbar/Navbar.jsx";
import Article from "../../Components/Article/Article.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { Container } from "react-bootstrap";


const Blogs = () => {
        return (
            <div className="d-flex min-vh-100 flex-column">
                <MyNavbar/>
            <Container className="flex-fill">
                <h1>Daftar Artikel</h1>
                    <Article/>
            </Container>
                <Footer/>
            </div>
        )
}

export default Blogs;