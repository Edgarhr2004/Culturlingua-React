// src/pages/Contact.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Contact() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Contact Us</h1>
        <p>A través de nuestros diferentes canales.</p>
        <br></br>
      </div>
    </div>
    <br></br><br></br>
      {/* Contact Form */}
      <section className="contact-form">
        <h2>¿Tienes preguntas? Contáctanos</h2>
        <form action="#">
          <input type="text" placeholder="Tu Nombre" required />
          <input type="email" placeholder="Tu Correo" required />
          <textarea placeholder="Tu Pregunta" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <br></br><br></br>
    </section>
  );
}

export default Contact;
