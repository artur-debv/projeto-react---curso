import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Container from "./components/layout/container";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Empresa" element={<Empresa />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
