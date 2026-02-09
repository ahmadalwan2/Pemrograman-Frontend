import { Container, Col, Row, Button, Card } from "react-bootstrap";
import MyNavbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import heroImg from "../../assets/img-1.svg";



const Home = () => {

  const categories = ["Teknologi", "Otomotif", "Fashion", "Sort"];
  return (
    <div className="d-flex min-vh-100 flex-column">
      <MyNavbar/>
          <div className="bg-primary text-light  flex-fill d-flex align-items-center">          
      <Container className="flex-fill d-flex align-items-center">
        <Row className="w-100 align-items-center">
            <Col md="6" className="mb-4 mb-md-0">
            <h1>Selamat datang di PeTIK Blog</h1>
            <p>
              Pesantren Teknologi Informasi dan Komunikasi (PeTIK) adalah lembaga pendidikan yang fokus pada pengembangan keterampilan IT, khususnya web development, mobile development dan jaringan
            </p>
            <p>
              Bergabunglah dengan kami dan tingkatkan keahlianmu di dunia digital bersama mentor dan praktisi industri!
            </p>
            <Button variant="light" size="small" href="/post" className="">Pelajari lebih lanjut</Button>
            </Col>
            <Col md="6">
              <img src={heroImg} alt="hero img" className="img-fluid"/>
            </Col>
        </Row>
      </Container>
          </div>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mt-4">Kategori Terpopuler</h2>
              <p className="text-muted">Eksplor kategori yang menarik</p>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
              {
                categories.map((category, index) => (
                  <Col md={4} key={index}>
                    <Card className="text-center shadow-sm category-card mb-5">
                        <Card.Body>
                          <Card.Title className="fw-bold">{category}</Card.Title>
                        </Card.Body>
                    </Card>
                  </Col>
                ))};
          </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default Home;
