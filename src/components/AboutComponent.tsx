import { Container, Row, Col, Card } from "react-bootstrap";

function AboutComponent() {
  const sections = [
    {
      icon: "bi-download",
      title: "Descarga de juegos",
      text: "Cada proyecto tiene su propia sección donde puedes encontrar enlaces de descarga, capturas y recursos relacionados.",
    },
    {
      icon: "bi-info-circle-fill",
      title: "Sobre el track",
      text: "Este espacio fue creado por miembros del track con el propósito de compartir y archivar proyectos creados durante nuestra participación.",
    },
    {
      icon: "bi-controller",
      title: "Juega en línea",
      text: "A futuro, nuestros juegos estarán disponibles para jugar directamente desde la web, sin necesidad de descarga.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Container className="py-5">
        <h1
          className="text-center mb-4"
          style={{
            color: "var(--color-games)",
            fontSize: "3rem",
            fontWeight: "800",
          }}
        >
          Sobre esta página
        </h1>
        <p
          className="text-center mb-5 px-3"
          style={{
            color: "white",
            fontSize: "1.2rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Un espacio hecho para compartir, organizar y dar vida a nuestras
          creaciones como comunidad de desarrollo de videojuegos.
        </p>
        <Row className="g-4">
          {sections.map((section, idx) => (
            <Col md={4} key={idx}>
              <Card
                className="h-100 text-center text-white transition"
                style={{ backgroundColor: "#141414" }}
              >
                <Card.Body
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <i
                    className={`bi ${section.icon} fs-1 mb-3`}
                    style={{ color: "var(--color-games)" }}
                  ></i>
                  <Card.Title style={{ fontWeight: "700", fontSize: "1.5rem" }}>
                    {section.title}
                  </Card.Title>
                  <Card.Text>{section.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
