// src/pages/Certificaciones.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function Certificaciones() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Certificaciones</h1>
        <p>15+ años</p>
      </div>
    </div>

    <section className="about-linguahub">
          <h2>Exam Preparation Courses</h2>
          <p>
          Curso diseñado para preparar al alumno para examenes de inglés, con base a a la experiencia de nuestros profesores y guías avaladas de estudio. Los examenes abren muchas puertas. Más de 6,000 Instituciones y agencias en 110 países confían en las calificaciones de los examenes* para seleccionar estudiantes con habilidades de Ingles necesarias para ser exitosos.

</p>
        </section>

{/* Benefits Section */}

    </section>

    
  );
}

export default Certificaciones;
