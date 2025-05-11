import { Card, Row, Col, Container, Button } from "react-bootstrap";

function FullProyectosComponent() {
  return (
    <Container className="py-5">
      <Row>
        {Array.from({ length: 9 }).map((_, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                <div>
                  <img
                    src="https://placehold.co/600x400"
                    alt="IMG"
                    style={{ width: 300 }}
                    className="mb-3"
                  />
                  <Card.Title style={{ color: "#b197fc" }}>
                    Proyecto {index + 1}
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi consectetur laboriosam qui commodi, nobis accusamus!
                    Illum, eligendi ex eum ea asperiores, quibusdam enim unde
                    dolorem veniam quasi, illo quidem earum.
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <Button variant="secondary" className="me-2">
                    Github Repo
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#b197fc",
                      borderColor: "#b197fc",
                    }}
                  >
                    Descargar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FullProyectosComponent;
