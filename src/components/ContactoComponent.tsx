import { Row, Col, Container, Card, Button } from "react-bootstrap";

function ContactoComponent() {
  return (
    <Container>
      <Row className="justify-content-center">
        <h1
          className="text-center"
          style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#b197fc" }}
        >
          Contacto
        </h1>
        <p className="text-center">
          Acá podrás encontrar información sobre los capitanes, profesores, etc,
          y sus medios de contacto.
        </p>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body className="d-flex flex-column justify-content-between text-center">
              <Card.Title style={{ color: "#b197fc" }}>Alan Gajardo</Card.Title>
              <Card.Text>
                Profesor encargado de la coordinación general del CITT. Es quien
                organiza y supervisa todas las actividades relacionadas con el
                centro, incluyendo ayudantías, mejoras internas y cualquier
                iniciativa vinculada al funcionamiento y desarrollo del CITT.
              </Card.Text>
              <div className="d-flex justify-content-center mt-3">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText("CORREO AQUÍ");
                  }}
                  style={{
                    backgroundColor: "#b197fc",
                    borderColor: "#b197fc",
                  }}
                >
                  Copiar correo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body className="d-flex flex-column justify-content-between text-center">
              <Card.Title style={{ color: "#b197fc" }}>Diego Plaza</Card.Title>
              <Card.Text>
                Capitán actual del track de Games. Se encarga de coordinar todo
                lo relacionado exclusivamente con este track: asistir a
                reuniones de capitanes, proponer ideas y nuevas iniciativas, y
                fomentar la participación activa de sus miembros, promoviendo el
                trabajo en equipo y el desarrollo conjunto de proyectos.
              </Card.Text>
              <div className="d-flex justify-content-center mt-3">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText("CORREO AQUÍ");
                  }}
                  style={{
                    backgroundColor: "#b197fc",
                    borderColor: "#b197fc",
                  }}
                >
                  Copiar correo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body className="d-flex flex-column justify-content-between text-center">
              <Card.Title style={{ color: "#b197fc" }}>
                Gabriel Valencia
              </Card.Title>
              <Card.Text>
                Subcapitán del track de Games y apoyo del capitán. Colabora
                activamente en todo lo relacionado con las actividades e
                iniciativas, mostrando siempre una gran disposición. Cumple un
                rol importante como representante en las reuniones internas,
                aportando ideas, compartiendo opiniones y ayudando a mantener
                una comunicación fluida entre los miembros.
              </Card.Text>
              <div className="d-flex justify-content-center mt-3">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText("CORREO AQUÍ");
                  }}
                  style={{
                    backgroundColor: "#b197fc",
                    borderColor: "#b197fc",
                  }}
                >
                  Copiar correo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactoComponent;
