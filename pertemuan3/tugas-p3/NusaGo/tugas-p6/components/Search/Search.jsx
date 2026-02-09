import "./Search.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import heroImg from "/img/draw-1.svg";

function Search() {
  const initialData = [
    {
      id: 1,
      title: "Hotel VVIP",
      price: "Rp200.000 | Permalam",
      description:
        "Hotel VVIP dengan private pool, layanan eksklusif, dan sunset Bali yang memukau",
      image: "/img/07.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Villa Borneo",
      price: "Rp900.000 | Permalam",
      description:
        "Villa Borneo menghadirkan nuansa budaya nusantara dalam suasana tenang dan alami",
      image: "/img/07.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "Gunung Bromo",
      price: "Rp200.000 | Tiket masuk",
      description:
        "Ikon wisata Jawa Timur dengan sunrise legendaris, lautan pasir luas yang menakjubkan",
      image: "/img/07.jpg",
      rating: 5,
    },
  ];

  const [query, setQuery] = useState("");
  const [cards, setCards] = useState(initialData);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: cards.length + 1,
      title,
      price,
      description,
      image: "/img/07.jpg",
      rating,
    };
    setCards([...cards, newCard]);
    setTitle("");
    setPrice("");
    setDescription("");
    setRating(5);
  };

  const renderStars = (count) =>
    [...Array(count)].map((_, i) => <FaStar key={i} size={18} color="gold" />);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <Container className="mt-4">
        <Form.Control
          type="text"
          placeholder="Cari destinasi..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-4"
        />

        <Row>
          {filteredCards.map((card) => (
            <Col key={card.id} md={4} className="mb-3">
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                    <strong>{card.price}</strong>
                  </Card.Text>
                  <Card.Text>{card.description}</Card.Text>
                  <div className="icons">{renderStars(card.rating)}</div>
                  <Button variant="success" className="mt-2">
                    Selengkapnya
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="p-5">
        <Row className="align-items-center">
          <Col md={7} className="text-center">
            <img
              src={heroImg}
              alt="hero"
              className="hero-img"
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
          </Col>

          <Col md={5}>
            <Form
              onSubmit={handleSubmit}
              className="p-4 shadow-sm bg-white rounded"
            >
              <Form.Group className="mb-3">
                <Form.Label>Judul Destinasi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contoh: Villa Impian"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contoh: Rp500.000 | Permalam"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Deskripsi singkat..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rating (1-5)</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  max={5}
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Tambahkan Sekarang
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Search;
