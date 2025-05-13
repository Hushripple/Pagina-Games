import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import ProyectosComponent from "./components/ProyectosComponent";
import FooterComponent from "./components/FooterComponent";
import AboutComponent from "./components/AboutComponent";
import TrackInfoContainer from "./components/TrackInfoContainer";
import ProyectosPage from "./pages/ProyectosPage";
import ContactoComponent from "./components/ContactoComponent";

function HomePage() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <TrackInfoContainer />
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
        <Route path="/proyectos" element={<ProyectosPage />}></Route>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
