import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

function GamesPage() {
  return (
    <Container className="py-5">
      <h1
        className="text-center mb-3"
        style={{
          color: "var(--color-games)",
          fontSize: "3rem",
          fontWeight: "800",
        }}
      >
        ¿Cómo funciona el track?
      </h1>
      <p
        className="text-center mb-5 px-2"
        style={{
          color: "white",
          fontSize: "1.2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        Enfocado en el aprendizaje autodidacta, trabajo en equipo y creación
        real de videojuegos.
      </p>

      <ProgressBar className="mb-5" style={{ height: "10px" }}>
        <ProgressBar
          now={33}
          key={1}
          label=""
          style={{ backgroundColor: "var(--color-games)" }}
        />
        <ProgressBar now={33} variant="dark" key={2} />
        <ProgressBar now={34} variant="secondary" key={3} />
      </ProgressBar>

      <Row className="g-4 mb-5">
        {[
          {
            icon: "bi-lightbulb-fill",
            title: "Ideación",
            text: "Compartimos ideas, proponemos conceptos y formamos equipos según intereses comunes.",
          },
          {
            icon: "bi-code-slash",
            title: "Desarrollo",
            text: "Usamos motores como Godot, Unity, entre otros para construir nuestros juegos desde cero.",
          },
          {
            icon: "bi-rocket-takeoff-fill",
            title: "Lanzamiento",
            text: "Mostramos nuestros proyectos en eventos, redes y ferias para inspirar y aprender.",
          },
        ].map((step, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100 text-center border-0 shadow-sm bg-black text-white transition hover-shadow-lg">
              <Card.Body
                style={{
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <i
                  className={`bi ${step.icon} fs-1 mb-3`}
                  style={{ color: "var(--color-games)" }}
                ></i>
                <Card.Title style={{ fontWeight: "700", fontSize: "1.5rem" }}>
                  {step.title}
                </Card.Title>
                <Card.Text>{step.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {[
        {
          title: "Ideación",
          content: `Nos reunimos mensualmente para compartir lo aprendido: herramientas, conceptos y experiencias. Esto fomenta la creatividad colectiva y fortalece la comunidad.`,
        },
        {
          title: "Desarrollo",
          content: (
            <>
              <p>
                En <strong>CITT Games</strong> priorizamos <em>hacer juegos</em>
                , no imponer cómo hacerlos. Cada equipo elige su herramienta:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>
                  — Motores como{" "}
                  <a
                    href="https://unity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Unity
                  </a>{" "}
                  o{" "}
                  <a
                    href="https://godotengine.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Godot
                  </a>
                </li>
                <li>
                  — Herramientas como{" "}
                  <a
                    href="https://www.renpy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Ren'Py
                  </a>{" "}
                  o{" "}
                  <a
                    href="https://www.rpgmakerweb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    RPG Maker
                  </a>
                </li>
                <li>— Plugins, plantillas o assets según sea necesario.</li>
              </ul>
              <p>
                Lo importante es que la herramienta sea una elección, no una
                limitación.
              </p>
            </>
          ),
        },
        {
          title: "Lanzamiento",
          content: (
            <>
              <p>Una vez listos, lanzamos nuestras creaciones al mundo:</p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>— Participación en dev jams y competencias.</li>
                <li>— Presentaciones en ferias de Duoc UC.</li>
                <li>
                  — Publicación en plataformas como{" "}
                  <a
                    href="https://itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    itch.io
                  </a>
                  .
                </li>
              </ul>
              <p>
                Todo con el fin de inspirar, recibir feedback y celebrar juntos
                lo logrado.
              </p>
            </>
          ),
        },
      ].map((section, idx) => (
        <div key={idx} className="mb-5 px-2">
          <h2
            className="text-center mb-3"
            style={{
              color: "var(--color-games)",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            {section.title}
          </h2>
          <div
            className="text-white text-center"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.7rem",
            }}
          >
            {section.content}
          </div>
        </div>
      ))}
    </Container>
  );
}

export default GamesPage;
