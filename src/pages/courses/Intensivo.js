// src/pages/Intensivo.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function Intensivo() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Intensivos</h1>
        <p>Todas las edades</p>
      </div>
    </div>

    <section className="about-linguahub">
          <h2>Intensive Courses</h2>
          <p>
          Curso diseñado con un enfoque claro, sencillo y flexible del idioma de una forma dinámica donde dentro del método de nuestro curso se trabaja y se desarrolla “Leer, Escuchar, hablar y escribir”, en el día a día en clases y se complementa el estudio con nuestra constante practica de el idioma con una divertida forma de aprender en este mundo globalizado, en la que podrás hacer uso de el idioma en tan solo 10 meses.

            </p>
        </section>

{/* Benefits Section */}
<section className="benefits">
        <h2>Generalidades</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>📖 Libro</h3>
            <p>World Link</p>
          </div>
          <div className="benefit-card">
            <h3>🕮 Editorial</h3>
            <p>National Geographic</p>
          </div>
          <div className="benefit-card">
            <h3>⌛ Horas por semana</h3>
            <p>8.5 hrs. (7.5 hrs clase + 1 hr club conversación)</p>
          </div>
          <div className="benefit-card">
            <h3>📆 Duración del nivel</h3>
            <p>12 semanas</p>
          </div>
        </div>
      </section>

    </section>

    
  );
}

export default Intensivo;
