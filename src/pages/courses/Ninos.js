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
          Curso que anima a los niños a usar el lenguaje de una manera natural y significativa mediante la conexión de inglés con sus propias vidas. El contenido de las lecciones al final de cada unidad proporciona una conexión práctica a otras materias escolares y enlaces a los valores e historias de la vida real, que enseñan importantes lecciones de la vida, como ser útiles, los valores y la buena ciudadanía. Todo esto en base a nuestro método, dinámico y divertido.</p>
        </section>

{/* Benefits Section */}
<section className="benefits">
        <h2>Generalidades</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>📖 Libro</h3>
            <p>Look</p>
          </div>
          <div className="benefit-card">
            <h3>🕮 Editorial</h3>
            <p>National Geographic</p>
          </div>
          <div className="benefit-card">
            <h3>⌛ Horas por semana</h3>
            <p>4.5 hrs.</p>
          </div>
          <div className="benefit-card">
            <h3>📆 Duración del nivel</h3>
            <p>15 semanas</p>
          </div>
        </div>
      </section>

    </section>

    
  );
}

export default Ninos;
