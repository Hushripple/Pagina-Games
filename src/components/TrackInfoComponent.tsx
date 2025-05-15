import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HoverLinkButtonProps {
  to: string;
  children: React.ReactNode;
}

function HoverLinkButton({ to, children }: HoverLinkButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button
        style={{
          backgroundColor: hover
            ? "var(--color-secondary)"
            : "var(--color-games)",
          borderColor: hover ? "var(--color-secondary)" : "var(--color-games)",
          color: "black",
          fontWeight: "600",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </Button>
    </Link>
  );
}

function TrackInfoComponent() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Container className="py-5">
        <Row className="align-items-center text-center text-md-start">
          <Col md={2} className="mb-4 mb-md-0 text-center">
            <i
              className="bi bi-stars"
              style={{
                fontSize: "4rem",
                color: "var(--color-games)",
              }}
            ></i>
          </Col>
          <Col md={10}>
            <h2
              style={{
                fontSize: "2.6rem",
                fontWeight: "bold",
                color: "var(--color-games)",
              }}
            >
              ¿Qué es CITT Games?
            </h2>
            <p
              className="mt-3"
              style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
            >
              CITT Games es una iniciativa estudiantil nacida dentro del track
              de videojuegos del Centro de Innovación y Transferencia
              Tecnológica (CITT) de DUOC UC, Sede Puente Alto. Nuestro objetivo
              es fomentar la creación colaborativa de videojuegos a través de un
              enfoque autodidacta, donde los estudiantes puedan aprender,
              experimentar y desarrollar sus habilidades en programación, arte
              digital, diseño de juegos, sonido y otras áreas relacionadas.
              <br />
              <br />
              Este track está pensado como un espacio abierto para compartir
              conocimientos, trabajar en equipo y llevar nuestras ideas a
              proyectos concretos, desde prototipos hasta juegos completos.
            </p>
            <div className="mt-3">
              <HoverLinkButton to="/games">Más información</HoverLinkButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrackInfoComponent;
