import { Container, Row, Col } from "react-bootstrap";

function ProyectosConstruccionPage() {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "var(--color-games)",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Row>
        <Col>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
            🚧 En Construcción 🚧
          </h1>
          <p style={{ fontSize: "1.5rem", color: "white" }}>
            Estamos trabajando para traerte nuestros proyectos muy pronto.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProyectosConstruccionPage;
