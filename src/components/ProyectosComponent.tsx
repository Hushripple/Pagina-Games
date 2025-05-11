import { Card, Row, Col, Container } from "react-bootstrap";

function ProyectosComponent() {
  return (
    <Container className="py-5">
      <Row>
        <h1
          className="text-center mb-5"
          style={{ color: "#b197fc", fontSize: "2.8rem", fontWeight: "bold" }}
        >
          Proyectos destacados
        </h1>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "#b197fc" }}>Proyecto 1</Card.Title>
              <Card.Text>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                consectetur laboriosam qui commodi, nobis accusamus! Illum,
                eligendi ex eum ea asperiores, quibusdam enim unde dolorem
                veniam quasi, illo quidem earum.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "#b197fc" }}>Proyecto 2</Card.Title>
              <Card.Text>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                consectetur laboriosam qui commodi, nobis accusamus! Illum,
                eligendi ex eum ea asperiores, quibusdam enim unde dolorem
                veniam quasi, illo quidem earum.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "#b197fc" }}>Proyecto 3</Card.Title>
              <Card.Text>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                consectetur laboriosam qui commodi, nobis accusamus! Illum,
                eligendi ex eum ea asperiores, quibusdam enim unde dolorem
                veniam quasi, illo quidem earum.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProyectosComponent;
