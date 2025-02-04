import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react"; // ✅ Import hooks
import Home from './pages/Home';
import InglesPresencial from "./pages/ingles-presencial";
import BuscaTuCurso from "./pages/ingles-presencial/Busca-tu-curso";
import Certificaciones from "./pages/ingles-presencial/Certificaciones";
import About from './pages/About';
import Courses from './pages/ingles-presencial/Courses';
import Contact from './pages/Contact';
import './style.css';
import InglesOnline from './pages/ingles-online';
import Linguahub from './pages/LinguaHub';
import Cursos from './pages/Cursos';
import CertificacionesIngles from "./pages/Certificacioes-Ingles";
import ExamenUbicacion from "./pages/ExamenUbicacion";
import PlacementTest from "./pages/PlacementTest";
import AboutUs from "./pages/AboutUs";
import SpanishClasses from "./pages/SpanishClasses";
import SummerCamp from "./pages/SummerCamp";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app-container">
    <Router>
    <nav className="navbar">
          {/* Home Logo */}
          <Link to="/" className="home-button">
            <img src="/logo.webp" alt="Home" className="home-logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="menu-button" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu" /* ✅ Fix: Improve accessibility */
          >
            ☰
          </button>

          {/* Menu Items */}
          <div className={`menu-items ${menuOpen ? "open" : ""}`}>
            <div className="menu-item">
              <Link to="/ingles-presencial" className="hover:underline">Aprende Inglés</Link>
              <div className="submenu">
                <Link to="/" className="submenu-link">Presencial</Link>
                <Link to="/ingles-online" className="submenu-link">Online</Link>
                <Link to="/Certificaciones-Ingles" className="submenu-link">Certificaciones</Link>
                <Link to="/Examen-de-ubicacion" className="submenu-link">Examen de Ubicación</Link>
              </div>
            </div>
            <div className="menu-item">
              <Link to="/Spanish" className="hover:underline">Learn Spanish</Link>
              <div className="submenu">
                <Link to="/AboutUs" className="submenu-link">About Us</Link>
                <Link to="/Spanish" className="submenu-link">Classes</Link>
                <Link to="/spanish/fees" className="submenu-link">Fees</Link>
                <Link to="/Placement-Test" className="submenu-link">Placement Test</Link>
                <Link to="/Services" className="submenu-link">Services</Link>
                <Link to="/Our-Location" className="submenu-link">Our Location</Link>
              </div>
            </div>
            <Link to="/Cursos" className="hover:underline">Cursos</Link>
            <Link to="/SummerCamp" className="hover:underline">Curso de Verano</Link>
            <Link to="/LinguaHub" className="hover:underline">LinguaHub</Link>
            <Link to="/Sobre-Nosotros" className="hover:underline">Sobre Nosotros</Link>
            
            <div className="menu-item">
            <Link to="/contacto" className="hover:underline">Contacto</Link>
              <div className="submenu">
                <Link to="/contacto" className="submenu-link">Contáctanos</Link>
                <Link to="/work-with-us" className="submenu-link">Trabaja con nosotros</Link>
              </div>
            </div>
          </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<InglesPresencial />} />
        <Route path="/ingles-online" element={<InglesOnline />} />
        <Route path="/Certificaciones-Ingles" element={<CertificacionesIngles />} />
        <Route path="/LinguaHub" element={<Linguahub />} />
        <Route path="/ingles-presencial/Certificaciones" element={<CertificacionesIngles />} />
        <Route path="/Examen-de-ubicacion" element={<ExamenUbicacion />} />
        <Route path="/SummerCamp" element={<SummerCamp />} />
        <Route path="/Services" element={<ExamenUbicacion />} />
        <Route path="/Our-Location" element={<ExamenUbicacion />} />
        <Route path="/Placement-Test" element={<PlacementTest />} />
        <Route path="/Sobre-Nosotros" element={<About />} />
        <Route path="/Spanish" element={<SpanishClasses />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="https://www.cultur-lingua.com.mx"/>
      </Routes>
    </Router>
    
      <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📍 Reforma 31, Tlaquepaque, Jalisco, México</p>
          <p>📞 +52 33 1234 5678</p>
          <p>📧 administracion@culturlingua.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/courses">Cursos</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/work-with-us">Trabaja con Nosotros</a></li>
          </ul>
        </div>

        {/* Extra Information */}
        <div className="footer-section">
          <h3>Información Adicional</h3>
          <p>📚 Aprende con profesores certificados.</p>
          <p>🌎 Clases en línea y presenciales.</p>
          <p>🏆 Certificaciones internacionales.</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/Culturlinguagdl" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/culturlingua_gdl/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Culturlingua. Todos los derechos reservados.</p>
    </footer>
    
      </div>

      

    
  );
}
