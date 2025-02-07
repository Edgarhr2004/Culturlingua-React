// src/pages/Empresas.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function Empresas() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Empresariales</h1>
        <p>Para el trabajo</p>
      </div>
    </div>

    <section className="about-linguahub">
          <h2>For Companies</h2>
          <p>
          ¿Tienes necesidad de que tus empleados hablen inglés?, nosotros podemos diseñar un plan de trabajo personalizado a tus necesidades y al giro de tu empresa o negocio, buscando que obtengas resultados inmediatos y tangibles que seguro vendrán a beneficiar a tu negocio en el que aprenderán lo necesario para emplearlo totalmente en tu negocio.
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
            <p>6 hrs (Recomendado)</p>
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

export default Empresas;
