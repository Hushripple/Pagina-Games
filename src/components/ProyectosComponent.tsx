import { useState } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface HoverButtonProps {
  link: string;
}

function HoverButton({ link }: HoverButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button
        style={{
          backgroundColor: hover
            ? "var(--color-secondary)"
            : "var(--color-games)",
          borderColor: hover ? "var(--color-secondary)" : "var(--color-games)",
          color: "black",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Descargar
      </Button>
    </a>
  );
}

function ProyectosComponent() {
  const proyectos = [
    {
      titulo: "GAMES: First Day (Demo)",
      imagen: "assets/vn.png",
      ancho: 300,
      texto:
        "Novela visual hecha con Ren’Py sobre una estudiante de informática desanimada por la falta de videojuegos en su carrera. Todo cambia cuando su profesora le habla del CITT, donde conoce gente con intereses similares y puede trabajar en un proyecto real de desarrollo de juegos.",
      link: "https://drive.google.com/file/d/1PIDwQwqW-1nUog-O8HG9PEu0kabdvaBc/view?usp=sharing",
    },
    {
      titulo: "Face Your Fears",
      imagen: "assets/fyf.png",
      ancho: 335,
      texto:
        "Juego de terror y plataformas hecho con Godot. Enfrentas tus miedos en un mundo oscuro lleno de criaturas. Cada obstáculo superado fortalece al personaje. Más que una experiencia de suspenso, transmite un mensaje de valentía, lucha personal y crecimiento a través del desafío.",
      link: "https://drive.google.com/file/d/1ti-p5gldwG6j7phaGkyc0nA6qItJlYmj/view?usp=drive_link",
    },
    {
      titulo: "Isekai ni shinde...",
      imagen: "assets/isekai.png",
      ancho: 310,
      texto:
        "Clon de Zelda 1 (NES) hecho con Godot como parte de un proceso de aprendizaje. Aunque básico, sirvió para entender cómo se construyen juegos retro desde cero. Fue una práctica útil para aprender lógica, manejo de escenas, y experimentar con recursos dentro del motor Godot.",
      link: "https://drive.google.com/drive/folders/112XajHOstoOSB_zV5GkOzXh-7kZ4eyuQ?usp=drive_link",
    },
  ];

  const [hoverTodos, setHoverTodos] = useState(false);

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Container className="py-5 px-4">
        <h1
          className="text-center mb-5"
          style={{
            color: "var(--color-games)",
            fontSize: "2.8rem",
            fontWeight: "bold",
          }}
        >
          Proyectos destacados
        </h1>
        <Row>
          {proyectos.map((p, index) => (
            <Col md={4} className="mb-4 d-flex" key={index}>
              <Card
                className="w-100 h-100 d-flex flex-column"
                style={{
                  backgroundColor: "black",
                  border: "1px solid rgba(255, 255, 1, 0.38)",
                  boxShadow: "0 0 12px rgba(255, 255, 0, 0.15)",
                  borderRadius: "12px",
                }}
              >
                <Card.Body className="d-flex flex-column">
                  <div className="text-center mb-3">
                    <img
                      src={p.imagen}
                      alt={`Imagen de ${p.titulo}`}
                      style={{ width: p.ancho }}
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                  <Card.Title
                    className="text-center mb-2"
                    style={{ color: "var(--color-games)", fontWeight: "bold" }}
                  >
                    {p.titulo}
                  </Card.Title>
                  <Card.Text style={{ flexGrow: 1, color: "white" }}>
                    {p.texto}
                  </Card.Text>
                  <div className="d-flex justify-content-center mt-3">
                    <HoverButton link={p.link} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-end">
            <Link to="/proyectos">
              <Button
                style={{
                  backgroundColor: hoverTodos
                    ? "var(--color-secondary)"
                    : "var(--color-games)",
                  borderColor: hoverTodos
                    ? "var(--color-secondary)"
                    : "var(--color-games)",
                  color: "black",
                }}
                onMouseEnter={() => setHoverTodos(true)}
                onMouseLeave={() => setHoverTodos(false)}
              >
                Todos los proyectos
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProyectosComponent;
