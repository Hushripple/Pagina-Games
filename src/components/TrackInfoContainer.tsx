import { Container, Row, Col } from "react-bootstrap";

function TrackInfoContainer() {
  return (
    <Container className="py-5 mb-2" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="align-items-center">
        <Col md={6}>
          <h2
            style={{ color: "#b197fc", fontSize: "2.8rem", fontWeight: "bold" }}
          >
            ¿Qué es CITT Games?
          </h2>
          <p>
            Nuestro track de videojuegos tiene como objetivo la creación
            colaborativa de videojuegos de manera autodidácta entre estudiantes
            de DUOC UC Sede Puente Alto.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://sm.ign.com/ign_ap/news/y/you-dont-n/you-dont-need-to-know-any-code-to-build-your-own-games_54ku.jpg"
            alt="About"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TrackInfoContainer;
