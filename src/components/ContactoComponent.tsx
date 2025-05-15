import { Row, Col, Container, Card } from "react-bootstrap";
import CopyButton from "./CopyButtonComponent";

function ContactoComponent() {
  return (
    <div style={{ color: "white", backgroundColor: "black" }}>
      <Container>
        <Row className="justify-content-center">
          <h1
            className="text-center mt-3"
            style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              color: "var(--color-games)",
            }}
          >
            Contacto
          </h1>
          <p className="text-center">
            Acá podrás encontrar información sobre los capitanes, profesores,
            etc, y sus medios de contacto.
          </p>
          <Col md={4} className="mb-4 d-flex">
            <Card
              className="w-100 h-100 shadow"
              style={{
                backgroundColor: "black",
                border: "1px solid rgba(255, 255, 1, 0.38)",
                boxShadow: "0 0 12px rgba(255, 255, 0, 0.15)",
                borderRadius: "12px",
                color: "white",
              }}
            >
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title
                  style={{ color: "var(--color-games)", fontWeight: "bold" }}
                >
                  Alan Gajardo
                </Card.Title>
                <Card.Text>
                  Profesor responsable de la coordinación general del CITT.
                  Supervisa las actividades internas, organiza iniciativas
                  académicas, y vela por el correcto funcionamiento del centro.
                  Es el principal referente ante dudas, propuestas o temas
                  administrativos relevantes.
                </Card.Text>
                <div className="d-flex justify-content-center mt-auto">
                  <CopyButton email="alan.gajardo@profesor.duoc.cl" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 d-flex">
            <Card
              className="w-100 h-100 shadow"
              style={{
                backgroundColor: "black",
                border: "1px solid rgba(255, 255, 1, 0.38)",
                boxShadow: "0 0 12px rgba(255, 255, 0, 0.15)",
                borderRadius: "12px",
                color: "white",
              }}
            >
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title
                  style={{ color: "var(--color-games)", fontWeight: "bold" }}
                >
                  Diego Plaza
                </Card.Title>
                <Card.Text>
                  Capitán del track de Games. Lidera las actividades del grupo,
                  representa al equipo en reuniones oficiales y propone nuevas
                  ideas. Su función principal es motivar la participación,
                  coordinar proyectos internos y fortalecer el trabajo
                  colaborativo del equipo.
                </Card.Text>
                <div className="d-flex justify-content-center mt-auto">
                  <CopyButton email="di.plazam@duocuc.cl" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              style={{
                backgroundColor: "black",
                border: "1px solid rgba(255, 255, 1, 0.38)",
                boxShadow: "0 0 12px rgba(255, 255, 0, 0.15)",
                borderRadius: "12px",
                color: "white",
              }}
            >
              <Card.Body className="d-flex flex-column text-center shadow">
                <Card.Title
                  style={{ color: "var(--color-games)", fontWeight: "bold" }}
                >
                  Gabriel Valencia
                </Card.Title>
                <Card.Text>
                  Subcapitán del track de Games. Apoya al capitán en tareas
                  organizativas, colabora en reuniones y actividades, y actúa
                  como nexo entre los miembros del grupo. Participa activamente
                  en decisiones internas y mantiene comunicación directa con la
                  coordinación.
                </Card.Text>
                <div className="d-flex justify-content-center mt-auto">
                  <CopyButton email="ga.valenciam@duocuc.cl" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactoComponent;
