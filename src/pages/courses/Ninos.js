// src/pages/Ninos.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function Ninos() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Niños</h1>
        <p>6 a 10 años</p>
      </div>
    </div>

    <section className="about-linguahub">
          <h2>Kids Courses</h2>
          <p>
          Nuestro Curso sigue la PEP mexicana (Programa de Educación Preescolar), poniendo de relieve el uso de Inglés natural, de una forma dinámica y divertida para los pequeños, en base a juegos, canciones, manualidades y dinámicas divertidas para ellos, y de esta manera promover las habilidades de los niños en otras áreas del currículo, haciendo hincapié en el desarrollo físico, trabajo en equipo y proyectos prácticos, así como el trabajo explícito con la fonética y valores.
          </p>
        </section>

{/* Benefits Section */}
<section className="benefits">
        <h2>Generalidades</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>📚 Libro</h3>
            <p>Aprende con docentes expertos y calificados.</p>
          </div>
          <div className="benefit-card">
            <h3>📚 Editorial</h3>
            <p>Accede a recursos complementarios y libros.</p>
          </div>
          <div className="benefit-card">
            <h3>🎯 Horas por semana</h3>
            <p>Aprende con herramientas interactivas en línea.</p>
          </div>
          <div className="benefit-card">
            <h3>🗣️ Duración del nivel</h3>
            <p>Estudia desde cualquier lugar o en nuestras aulas.</p>
          </div>
        </div>
      </section>

    </section>

    
  );
}

export default Ninos;
