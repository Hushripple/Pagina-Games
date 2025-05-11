import { Container, Row, Col } from "react-bootstrap";

function FooterComponent() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col>
            <p>
              {" "}
              <span style={{ color: "#b197fc", fontWeight: "bold" }}>
                © 2025 CITT GAMES
              </span>
              , Todos los derechos reservados
            </p>
          </Col>
          <Col className="text-center text-md-end">
            <p>
              Síguenos en nuestras{" "}
              <span style={{ color: "#b197fc", fontWeight: "bold" }}>
                redes sociales:
              </span>
            </p>
            <div>
              <a
                href="https://www.facebook.com/"
                className="text-dark me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://x.com/"
                className="text-dark me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
