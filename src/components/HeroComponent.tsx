import { Container, Row, Col } from "react-bootstrap";

function HeroComponent() {
  return (
    <div
      className="text-light py-5 text-center"
      style={{
        background: "black",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1
              className="fw-bolder display-4"
              style={{
                letterSpacing: "2px",
                lineHeight: "1.3",
                color: "var(--color-secondary)",
              }}
            >
              Bienvenid@ a{" "}
              <span style={{ color: "var(--color-games)" }}>CITT Games</span>{" "}
              Sede Puente Alto
            </h1>
            <p className="lead mt-3">
              Explora nuestro track, proyectos, y más.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroComponent;
