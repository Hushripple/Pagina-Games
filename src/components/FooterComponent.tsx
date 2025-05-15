import { Container, Row, Col } from "react-bootstrap";

function FooterComponent() {
  return (
    <footer
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        color: "white",
        backgroundColor: "#161616",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col>
            <p>
              {" "}
              <span style={{ color: "var(--color-games)", fontWeight: "bold" }}>
                © 2025 CITT GAMES
              </span>
              , Todos los derechos reservados
            </p>
          </Col>
          <Col className="text-center text-md-end">
            <p>
              Redes oficiales de{" "}
              <span style={{ color: "var(--color-games)", fontWeight: "bold" }}>
                CITT
              </span>
            </p>
            <div>
              <a
                href="https://www.instagram.com/cittduocuc/"
                className="mx-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://www.instagram.com/citt_puentealto/"
                className="mx-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://www.youtube.com/c/CITTDuocUC"
                className="mx-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
