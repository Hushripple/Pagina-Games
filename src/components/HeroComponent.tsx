import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroComponent() {
  return (
    <div
      className="hero-section"
      style={{
        padding: "80px 0",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 style={{ fontSize: "2.8rem", fontWeight: "bold" }}>
              Bienvenid@ a <span style={{ color: "#b197fc" }}>CITT Games</span>{" "}
              Sede Puente Alto
            </h1>
            <Link to="/proyectos">
              <Button
                variant="light"
                style={{
                  marginTop: "30px",
                  border: "2px solid #b197fc",
                  color: "#b197fc",
                  fontWeight: "500",
                }}
              >
                Conoce nuestros proyectos
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroComponent;
