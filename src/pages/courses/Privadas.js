// src/pages/Privadas.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function Privadas() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Privadas</h1>
        <p>Todas las edades</p>
      </div>
    </div>

    <section className="about-linguahub">
          <h2>Private Lessons</h2>
          <p>
          ¿No tiene tiempo disponible para tomar un curso regular? Te invitamos a preguntar por nuestras clases privadas las cuales le permitirán avanzar a su propio ritmo en los horarios mas convenientes para usted, desde 1 hasta 5 horas por semana dependiendo de sus necesidades, impartidas por experimentados maestros los cuales harán que sus clases sean de mayor aprovechamiento y en realidad compruebe como ira avanzando gradualmente su nivel de conocimientos.


            </p>
        </section>

{/* Benefits Section */}
<section className="benefits">
        <h2>Generalidades</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>📖 Libro</h3>
            <p>Opcional</p>
          </div>
          <div className="benefit-card">
            <h3>⌛ Horas por semana</h3>
            <p>5 hrs (Recomendado)</p>
          </div>
          <div className="benefit-card">
            <h3>📆 Duración del nivel</h3>
            <p>A convenir</p>
          </div>
        </div>
      </section>

    </section>

    
  );
}

export default Privadas;
