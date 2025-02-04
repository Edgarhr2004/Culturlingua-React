// src/pages/ExamenUbicacion.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function ExamenUbicacion() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Examen de Ubicación de Inglés</h1>
        <p>Examen de ubicación de inglés online, conoce tu progreso en el idioma.
            Tomate tú tiempo para contestar el examen, no es necesario que lo termines, contesta lo que puedas para poder evaluar correctamente tu nivel de inglés.</p>
        <br></br>
      </div>
    </div>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScXIcfD0a8JkcXUARSnWOMf1eifUCnYU3RhU_0Vu60MN-R0Bg/viewform?embedded=true" width="700" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
    </section>
  );
}

export default ExamenUbicacion;
