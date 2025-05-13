import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProyectosComponent() {
  return (
    <Container className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Row>
        <h1
          className="text-center mb-4"
          style={{ color: "#b197fc", fontSize: "2.8rem", fontWeight: "bold" }}
        >
          Proyectos destacados
        </h1>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body className="d-flex flex-column justify-content-between text-center">
              <div>
                <img
                  src="src/assets/vn.png"
                  alt="IMG"
                  style={{ width: 300 }}
                  className="mb-3"
                />
              </div>
              <Card.Title style={{ color: "#b197fc" }}>
                GAMES: First Day (Demo)
              </Card.Title>
              <Card.Text>
                Novela visual desarrollada con Ren'Py. Cuenta la historia de una
                estudiante de primer año de Ingeniería Informática apasionada
                por los videojuegos. Sin embargo, se siente desanimada al
                descubrir que su malla curricular no incluye nada relacionado
                con ellos. Todo cambia cuando, durante una clase, su profesora
                les habla sobre el CITT, una iniciativa que le ofrece la
                oportunidad de unirse a un equipo para crear videojuegos junto a
                otras personas con intereses similares.
              </Card.Text>
              <div className="d-flex justify-content-center mt-3">
                <a
                  href="https://github.com/Hushripple/Games-VN"
                  target="_blank"
                >
                  <Button variant="secondary" className="me-2">
                    Github Repo
                  </Button>
                </a>

                <a
                  href="https://drive.google.com/file/d/1PIDwQwqW-1nUog-O8HG9PEu0kabdvaBc/view?usp=sharing"
                  target="_blank"
                >
                  <Button
                    style={{
                      backgroundColor: "#b197fc",
                      borderColor: "#b197fc",
                    }}
                  >
                    Descargar
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body className="d-flex flex-column justify-content-between text-center">
              <div>
                <img
                  src="src/assets/fyf.png"
                  alt="IMG"
                  style={{ width: 335 }}
                  className="mb-3"
                />
              </div>
              <Card.Title style={{ color: "#b197fc" }}>
                Face Your Fears
              </Card.Title>
              <Card.Text>
                Face Your Fears es un juego de terror y plataformas desarrollado
                en Godot y GDScript que te sumerge en el mundo de los miedos
                infantiles. En esta demo, juegas como un niño valiente que debe
                enfrentarse a sus pesadillas en un entorno oscuro y lleno de
                criaturas aterradoras. A medida que avanzas y superas cada
                miedo, el protagonista se vuelve más fuerte. Más allá del
                suspenso y los desafíos, el juego transmite un mensaje
                inspirador sobre la valentía y la superación personal.
              </Card.Text>
              <div className="d-flex justify-content-center mt-3">
                <a
                  href="https://danery-arriagada.itch.io/face-your-fears"
                  target="_blank"
                >
                  <Button
                    style={{
                      backgroundColor: "#b197fc",
                      borderColor: "#b197fc",
                    }}
                  >
                    Itch.io
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body className="d-flex flex-column justify-content-between text-center">
              <div>
                <img
                  src="src/assets/isekai.png"
                  alt="IMG"
                  style={{ width: 310 }}
                  className="mb-3"
                />
              </div>
              <Card.Title style={{ color: "#b197fc" }}>
                Isekai ni shinde...
              </Card.Title>
              <Card.Text>
                Clon de Zelda 1 (NES) desarrollado con Godot y GDScript. Este
                proyecto fue creado principalmente como parte de un proceso de
                aprendizaje, siguiendo un tutorial paso a paso para entender
                cómo se construyen desde cero los juegos de estilo. Aunque el
                resultado es bastante limitado y simple en cuanto a mecánicas y
                diseño, sirvió como una excelente base para experimentar con la
                lógica del motor, el manejo de escenas y el uso de assets
                prediseñados. Es un ejercicio práctico que permitió
                familiarizarse con los fundamentos del desarrollo de videojuegos
                en Godot.
              </Card.Text>
              <div className="d-flex justify-content-center mt-3">
                <a
                  href="https://drive.google.com/drive/folders/112XajHOstoOSB_zV5GkOzXh-7kZ4eyuQ?usp=drive_link"
                  target="_blank"
                >
                  <Button
                    style={{
                      backgroundColor: "#b197fc",
                      borderColor: "#b197fc",
                    }}
                  >
                    Descargar
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Row className="mt-4">
          <Col className="d-flex justify-content-end">
            <Link to="/proyectos">
              <Button
                variant="light"
                style={{
                  border: "2px solid #b197fc",
                  color: "#b197fc",
                  fontWeight: "500",
                }}
              >
                Ver todos los proyectos
              </Button>
            </Link>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default ProyectosComponent;
