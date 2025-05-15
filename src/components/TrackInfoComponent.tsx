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
    <div style={{ color: "white", backgroundColor: "black" }}>
      <Container className="py-5 mb-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2
              style={{
                color: "var(--color-games)",
                fontSize: "2.8rem",
                fontWeight: "bold",
              }}
            >
              ¿Qué es CITT Games?
            </h2>
            <p>
              CITT Games es una iniciativa estudiantil nacida dentro del track
              de videojuegos del Centro de Innovación y Transferencia
              Tecnológica (CITT) de DUOC UC, Sede Puente Alto. Nuestro objetivo
              es fomentar la creación colaborativa de videojuegos a través de un
              enfoque autodidacta, donde los estudiantes puedan aprender,
              experimentar y desarrollar sus habilidades en programación, arte
              digital, diseño de juegos, sonido y otras áreas relacionadas. Este
              track está pensado como un espacio abierto para compartir
              conocimientos, trabajar en equipo y llevar nuestras ideas a
              proyectos concretos, desde prototipos hasta juegos completos.
            </p>
            <HoverLinkButton to="/games">Más información</HoverLinkButton>
          </Col>
          <Col md={6}>
            <img
              src="https://sm.ign.com/ign_ap/news/y/you-dont-n/you-dont-need-to-know-any-code-to-build-your-own-games_54ku.jpg"
              alt="About"
              className="img-fluid rounded shadow"
              style={{ width: 600 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrackInfoComponent;
