import { Container, Row, Col } from "react-bootstrap";

function AboutComponent() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="https://i0.wp.com/gamingrespawn.com/wp-content/uploads/2023/04/Coding-vs-programming.jpg?ssl=1"
            alt="About"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h2
            style={{ color: "#b197fc", fontSize: "2.8rem", fontWeight: "bold" }}
          >
            Sobre esta página
          </h2>
          <p>
            Este espacio fue creado por integrantes del track para poder subir y
            archivar los diversos proyectos que realicemos a lo largo de nuestra
            estadía en el track. A su vez, existe la iniciativa de lograr que
            nuestros juegos sean jugables en esta misma página, sin necesidad de
            descarga, pero por el momento es un centro donde podrán encontrar
            los repositorios de Github, imágenes, links de descarga, etc.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutComponent;
