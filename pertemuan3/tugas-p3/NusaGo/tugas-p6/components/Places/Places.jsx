import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";


import {
  Button,
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
  Spinner,
} from "reactstrap";

const Places = () => {
  const [portals, setPortals] = useState([]);
  const [places, setPlaces] = useState([]);
  const [activePortal, setActivePortal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrMessage] = useState("");

  useEffect(() => {
    const fetchPortal = async () => {
      try {
        const portalResponse = await axios.get(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        );

        const portalNews = portalResponse.data.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        setPortals(portalNews);
      } catch (error) {
        console.log(error);
        setErrMessage("Gagal memuat daftar provinsi");
      }
    };
    fetchPortal();
  }, []);

  const fetchPlaces = async (portal) => {
    try {
      setLoading(true);
      setErrMessage("");
      setPlaces([]);

      const endpoint = `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${portal.id}.json`;

      const response = await axios.get(endpoint);
      setPlaces(response.data || []);
      setActivePortal(portal);
    } catch (error) {
      console.log(error);
      setErrMessage("Gagal memuat data tempat");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
    <Container className="mt-1">

      <h3>Portal Wilayah</h3>
      <div className="mb-4 d-flex justify-content-space-between gap-2">
        {portals.map((portal, index) => (
          <Button
            key={index}
            color={activePortal?.id === portal.id ? "success" : "secondary"}
            onClick={() => fetchPlaces(portal)}
          >
            {portal.name}
          </Button>
        ))}
      </div>

      {loading && (
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <Spinner
            color="danger"
            style={{
              height: "3rem",
              width: "3rem",
            }}
            type="grow"
          >
            loading
          </Spinner>
          <p className="text-muted">Memuat data...</p>
        </div>
      )}
      {errorMessage && !loading && (
        <p className="text-danger fw-bold">{errorMessage}</p>
      )}

      <Row>
        {places.map((item, index) => (
          <Col key={index}>
            <Card
              body
              color="light"
              outline
              style={{
                width: "18rem",
              }}
            >
              <img alt={item.name} src={`/img/${item.id}.jpg`} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  ID: {item.id}
                </CardSubtitle>
                <CardText>Kabupaten/Kota di provinsi {activePortal?.name}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      <Footer />

        </div>
  );
};

export default Places;
