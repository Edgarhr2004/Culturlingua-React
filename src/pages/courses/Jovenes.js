// src/pages/Jovenes.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function Jovenes() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Jovenes</h1>
        <p>11 a 15 años</p>
      </div>
    </div>

    <section className="about-linguahub">
          <h2>Teens Courses</h2>
          <p>
          Curso de inglés enfocado a estudiantes de secundaria, donde se les ayuda a ser más autónomos. Introducimos, reforzamos y perfeccionamos su conocimiento del lenguaje en un contexto enfocado a la edad de los estudiantes y pedimos a los estudiantes a notar y practicar el lenguaje de manera significativa, utilizando un enfoque ecléctico que incorpora lo mejor de la madre enseñanza comunicativa en Ingles en un ambiente casual acorde a ellos y de manera práctica y divertida.

            </p>
        </section>

{/* Benefits Section */}
<section className="benefits">
        <h2>Generalidades</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>📖 Libro</h3>
            <p>Times Zones</p>
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

export default Jovenes;
