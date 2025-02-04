// src/pages/SummerCamp.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function SummerCamp() {

  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Summer Camp for Kids</h1>
        <p>Un verano único, lleno de aprendizaje.</p>
        <br></br>
      </div>
    </div>
      {/* Photo Gallery */}
      <section className="carousel-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="carousel-container"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="./assets/school.avif" alt="Students in class" />
            <div className="text">
              <h2>Aprende con Profesores Expertos</h2>
              <p>Clases dinámicas con docentes certificados.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src="./assets/tlaquepaque.avif" alt="Online learning" />
            <div className="text">
              <h2>Clases Presenciales y en Línea</h2>
              <p>Estudia desde cualquier lugar con nuestra plataforma.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src="./assets/number.webp" alt="CEFR-based methodology" />
            <div className="text">
              <h2>Metodología Basada en el MCER</h2>
              <p>Garantiza tu aprendizaje con estándares internacionales.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section className="summer-camp-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>🌞 Summer Camp 2025 🌿</h1>
      </div>
      
      {/* Important Info Section */}
      <section className="info-card">
        <h2>📌 Important Information</h2>
        <ul>
          <li><strong>📅 Fechas:</strong> July 15 - August 10, 2025</li>
          <li><strong>📍 Ubicación:</strong> Culturlingua Campus, Guadalajara</li>
          <li><strong>👧🧒 Edades:</strong> 6 - 15 years</li>
          <li><strong>🕒 Horario:</strong> Monday - Friday, 9:00 AM - 3:00 PM</li>
        </ul>
      </section>
      
      {/* Workshops Section */}
      <section className="benefits">
        <h2>Talleres incluidos</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>📚 Inglés</h3>
            <p>1 hora diaria de inglés donde aprendan divirtiéndose y jugando.</p>
          </div>
          <div className="benefit-card">
            <h3>🥣 Cocina</h3>
            <p>Tus pequeños prepararan deliciosos y divertidos platillos con sus propias manos.</p>
          </div>
          <div className="benefit-card">
            <h3>🎨 Manualidades</h3>
            <p>Fomentamos la creatividad de los pequeños con nuestras divertidas manualidades</p>
          </div>
          <div className="benefit-card">
            <h3>🎭 Teatro</h3>
            <p>Crearan una obra de teatro desde la escenografía hasta los diálogos desarrollando su creatividad.</p>
          </div>
          <div className="benefit-card">
            <h3>🧪 Ciencia</h3>
            <p>Para los pequeños curiosos tenemos increíbles pero seguros experimentos científicos.</p>
          </div>
          <div className="benefit-card">
            <h3>🎶 Baile</h3>
            <p>Para los pequeños bailarines desarrollaremos sus habilidades en nuestras clases de baile.</p>
          </div>
          <div className="benefit-card">
            <h3>🏃‍♂️ Deporte</h3>
            <p>Por que el desarrollo físico también es importante, tus pequeños estarán en constante movimiento.</p>
          </div>
          <div className="benefit-card">
            <h3>🎂 Fiesta de Cumpleaños</h3>
            <p>Para nuestros pequeños cumpleañeros tendremos fiesta con muchas sorpresas.</p>
          </div>
        </div>
      </section>
      
      {/* Enrollment Section */}
      <section className="enrollment">
        <h2>📝 Inscripciones Próximamente en Verano 2025</h2>
      </section>
    </section>
    
    </section>
  );
}

export default SummerCamp;
