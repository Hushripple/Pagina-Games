import { Container, Row, Col } from "react-bootstrap";

function AboutComponent() {
  return (
    <Container className="py-5" style={{ color: "#f8f9fa" }}>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="https://i0.wp.com/gamingrespawn.com/wp-content/uploads/2023/04/Coding-vs-programming.jpg?ssl=1"
            alt="About"
            className="img-fluid shadow"
            style={{ width: 600 }}
          />
        </Col>
        <Col md={6}>
          <h2
            style={{
              color: "var(--color-games)",
              fontSize: "2.8rem",
              fontWeight: "bold",
            }}
          >
            Sobre esta página
          </h2>
          <p>
            Este espacio fue creado por miembros del track con el propósito de
            compartir y archivar los distintos proyectos que desarrollemos
            durante nuestra participación. Además, existe la intención de que,
            en el futuro, nuestros juegos puedan jugarse directamente desde esta
            página, sin necesidad de descarga. Por ahora, funciona como un
            centro donde podrán encontrar repositorios de GitHub, imágenes,
            enlaces de descarga y otros recursos relacionados.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutComponent;
