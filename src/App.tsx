import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import ProyectosComponent from "./components/ProyectosComponent";
import FooterComponent from "./components/FooterComponent";
import AboutComponent from "./components/AboutComponent";
import ProyectosConstruccionPage from "./pages/ProyectosConstruccionPage";
import ContactoComponent from "./components/ContactoComponent";
import TrackInfoComponent from "./components/TrackInfoComponent";
import GamesPage from "./pages/GamesPage";

function HomePage() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <TrackInfoComponent />
      <ContactoComponent></ContactoComponent>
      <ProyectosComponent />
    </>
  );
}

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/proyectos" element={<ProyectosPage />}></Route>*/}
        <Route
          path="/proyectos"
          element={<ProyectosConstruccionPage></ProyectosConstruccionPage>}
        ></Route>
        <Route path="/games" element={<GamesPage></GamesPage>}></Route>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
