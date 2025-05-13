import { Container } from "react-bootstrap";
import FullProyectosComponent from "../components/FullProyectosComponent";

function ProyectosPage() {
  return (
    <Container className="py-5">
      <h1
        className="text-center"
        style={{ color: "#b197fc", fontSize: "2.8rem", fontWeight: "bold" }}
      >
        Todos los proyectos
      </h1>
      <FullProyectosComponent />
    </Container>
  );
}

export default ProyectosPage;
