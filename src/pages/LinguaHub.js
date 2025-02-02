// src/pages/LinguaHub.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChartBar, FaChalkboardTeacher, FaBookOpen, FaGlobe, FaCreditCard, FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";



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
          description: "Paga cómodamente con múltiples opciones de pago y realiza seguimientos a tus facturas.",
          benefit: "Sigue tu historial de pagos y realiza transacciones seguras desde la plataforma."
        },
        {
          icon: <FaAward />,
          title: "Certificaciones Internacionales",
          description: "Obtén certificados reconocidos internacionalmente para cada curso completado.",
          benefit: "Tus logros serán reconocidos globalmente y añadirán valor a tu CV."
        },
        {
          icon: <FaUsers />,
          title: "Comunidad Estudiantil",
          description: "Interactúa con otros estudiantes a través de foros y grupos de discusión.",
          benefit: "Construirás una red de contactos con compañeros de todo el mundo mientras aprendes."
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
