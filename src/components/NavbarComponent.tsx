import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Icon"
            src="src/assets/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          CITT Games
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="main-navbar"></Navbar.Toggle>
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/proyectos">
              Proyectos
            </Nav.Link>
            <Button
              style={{ backgroundColor: "#b197fc", borderColor: "#b197fc" }}
            >
              Iniciar sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
