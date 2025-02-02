import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import InglesPresencial from "./pages/ingles-presencial";
import BuscaTuCurso from "./pages/ingles-presencial/Busca-tu-curso";
import Certificaciones from "./pages/ingles-presencial/Certificaciones";
import About from './pages/About';
import Courses from './pages/ingles-presencial/Courses';
import Contact from './pages/Contact';
import { useState } from "react";
import './style.css';
import InglesOnline from './pages/ingles-online';
import Linguahub from './pages/LinguaHub';

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
              <Link to="/ingles-presencial" className="hover:underline">Inglés</Link>
              <div className="submenu">
                <Link to="/" className="submenu-link">Presencial</Link>
                <Link to="/ingles-online" className="submenu-link">Online</Link>
              </div>
            </div>
            <div className="menu-item">
              <Link to="/spanish" className="hover:underline">Spanish</Link>
              <div className="submenu">
                <Link to="/spanish/classes" className="submenu-link">Classes</Link>
                <Link to="/spanish/fees" className="submenu-link">Fees</Link>
              </div>
            </div>
            <Link to="/cursos" className="hover:underline">Cursos</Link>
            <Link to="/LinguaHub" className="hover:underline">LinguaHub</Link>
            <Link to="/sobre-nosotros" className="hover:underline">Sobre Nosotros</Link>
            <Link to="/contacto" className="hover:underline">Contacto</Link>
          </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<InglesPresencial />} />
        <Route path="/ingles-online" element={<InglesOnline />} />
        <Route path="/LinguaHub" element={<Linguahub />} />
        <Route path="/ingles-presencial/Certificaciones" element={<Certificaciones />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
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
