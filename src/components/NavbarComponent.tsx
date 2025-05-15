import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="shadow-sm"
      style={{ backgroundColor: "black" }}
    >
      <Container>
        <Navbar.Brand className="d-flex align-items-center gap-2 fw-semibold text-light">
          <img
            alt="Icon"
            src="assets/logo2.png"
            width="30"
            height="30"
            className="rounded"
          />
          CITT Games
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light fw-medium px-3">
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/proyectos"
              className="text-light fw-medium px-3"
            >
              Proyectos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/games"
              className="text-light fw-medium px-3"
            >
              Más información
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
