// src/pages/Adultos.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function Adultos() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Adultos</h1>
        <p>15+ años</p>
      </div>
    </div>

    <section className="about-linguahub">
          <h2>Adults Courses</h2>
          <p>
          Curso diseñado para mayores de 15 años con un enfoque claro, sencillo y flexible del idioma de una forma dinámica. Donde dentro del método de nuestro curso se trabaja y se desarrolla “Leer, Escuchar, hablar y escribir”, en el día a día en clases y se complementa el estudio con nuestro material que utiliza una plataforma virtual con la cual es fácil de trabajar y con una divertida forma de aprender en este mundo globalizado.


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
            <p>5.5 hrs. (4.5 hrs clase + 1 hr club conversación)</p>
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

export default Adultos;
