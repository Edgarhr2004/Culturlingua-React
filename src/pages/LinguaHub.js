// src/pages/LinguaHub.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChartBar, FaChalkboardTeacher, FaBookOpen, FaGlobe, FaCreditCard, FaAward, FaMobileAlt, FaUserClock, FaRobot } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';




function LinguaHub() {
    const features = [
        {
          icon: <FaChartBar />,
          title: "Seguimiento del Progreso",
          description: "Monitorea tu avance en cada curso con informes personalizados y gráficos interactivos.",
          benefit: "Saber tu progreso te ayuda a mantener la motivación y trabajar en áreas específicas."
        },
        {
          icon: <FaChalkboardTeacher />,
          title: "Clases con Profesores Expertos",
          description: "Accede a clases en línea y presenciales con profesores certificados y expertos.",
          benefit: "Recibirás formación de calidad para dominar el idioma con un enfoque práctico."
        },
        {
          icon: <FaBookOpen />,
          title: "Recursos de Aprendizaje",
          description: "Accede a libros, videos y otros materiales exclusivos dentro de la plataforma.",
          benefit: "Tendrás todos los recursos que necesitas a tu alcance para un aprendizaje continuo."
        },
        {
          icon: <FaGlobe />,
          title: "Accesibilidad Global",
          description: "Estudia desde cualquier lugar con la plataforma online, sin limitaciones geográficas.",
          benefit: "La educación flexible te permite aprender a tu propio ritmo y desde cualquier lugar."
        },
        {
          icon: <FaCreditCard />,
          title: "Gestión de Pagos Segura",
          description: "Realiza seguimientos a tus recibos y pagos por nivel.",
          benefit: "Sigue tu historial de pagos desde la plataforma."
        },
        {
          icon: <FaAward />,
          title: "Certificaciones Internacionales",
          description: "Obtén certificados reconocidos internacionalmente para cada curso completado.",
          benefit: "Tus logros serán reconocidos globalmente y añadirán valor a tu CV."
        },
        {
          icon: <FaMobileAlt />,
          title: "Acceso 24/7 desde Cualquier Dispositivo",
          description: "Nuestra plataforma está disponible en computadoras, tablets y celulares.",
          benefit: "Aprende sin restricciones y aprovecha cada momento para estudiar, estés donde estés."
        },
        {
          icon: <FaUserClock />,
          title: "Horarios 100% Flexibles",
          description: "Toma clases en vivo* o accede a las grabaciones en cualquier momento.",
          benefit: "Ajusta tu aprendizaje a tu ritmo de vida sin perder contenido ni clases importantes."
        },
        {
          icon: <FaRobot />,
          title: "Chatbot de IA",
          description: "Accede a un asistente virtual inteligente disponible las 24 horas para resolver tus dudas y ofrecer apoyo adicional.",
          benefit: "Recibe ayuda instantánea sobre tus dudas de sobre clases, talleres, dinámicas, actividades, funcionalidades de la plataforma, etc."
        },
      ];
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Conoce LinguaHub</h1>
        <p>Tu nuevo seguimiento de aprendizaje basado en la tecnología.</p>
        <br></br>
        <Link to="https://cultur-lingua.com.mx/" className="cta-button">Entra a LinguaHub</Link>
      </div>
    </div>

    <section className="about-linguahub">
    <h2>¿Qué es LinguaHub?</h2>
    <p>
        LinguaHub es una plataforma de aprendizaje de idiomas diseñada para ofrecer
        una experiencia educativa completa, con herramientas interactivas, contenido
        personalizado y acceso a profesores certificados. Ya sea que desees mejorar
        tus habilidades lingüísticas o comenzar desde cero, LinguaHub te brinda los
        recursos para lograr tus metas.
    </p>
    </section>

    

    <section className="features">
      <h2>¿Qué Puede Hacer LinguaHub para Ti?</h2>
      <p>Explora las características clave que harán tu experiencia de aprendizaje más efectiva.</p>
      <br></br><br></br>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <p className="benefit"><strong>Beneficio para ti:</strong> {feature.benefit}</p>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

export default LinguaHub;
