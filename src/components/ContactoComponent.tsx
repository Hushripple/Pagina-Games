import { Row, Col, Container, Card } from "react-bootstrap";
import CopyButton from "./CopyButtonComponent";

function ContactoComponent() {
  return (
    <div style={{ color: "white", backgroundColor: "#141414" }}>
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

          {[
            {
              name: "Alan Gajardo",
              email: "alan.gajardo@profesor.duoc.cl",
              description:
                "Profesor responsable de la coordinación general del CITT. Supervisa las actividades internas, organiza iniciativas académicas, y vela por el correcto funcionamiento del centro. Es el principal referente ante dudas, propuestas o temas administrativos relevantes.",
            },
            {
              name: "Diego Plaza",
              email: "di.plazam@duocuc.cl",
              description:
                "Capitán del track de Games. Lidera las actividades del grupo, representa al equipo en reuniones oficiales y propone nuevas ideas. Su función principal es motivar la participación, coordinar proyectos internos y fortalecer el trabajo colaborativo del equipo.",
            },
            {
              name: "Gabriel Valencia",
              email: "ga.valenciam@duocuc.cl",
              description:
                "Subcapitán del track de Games. Apoya al capitán en tareas organizativas, colabora en reuniones y actividades, y actúa como nexo entre los miembros del grupo. Participa activamente en decisiones internas y mantiene comunicación directa con la coordinación.",
            },
          ].map((person, idx) => (
            <Col md={4} className="mb-4 d-flex" key={idx}>
              <Card
                className="w-100 h-100 shadow"
                style={{
                  backgroundColor: "#141414",
                  color: "white",
                }}
              >
                <Card.Body
                  className="d-flex flex-column text-center"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Card.Title
                    style={{ color: "var(--color-games)", fontWeight: "bold" }}
                  >
                    {person.name}
                  </Card.Title>
                  <Card.Text>{person.description}</Card.Text>
                  <div className="d-flex justify-content-center mt-auto">
                    <CopyButton email={person.email} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ContactoComponent;
