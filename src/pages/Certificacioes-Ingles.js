// src/pages/CertificacionesIngles.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";


function CertificacionesIngles() {

    const certifications = [
        {
          name: "Cambridge",
          description:
            "Certificación valida a nivel mundial. Si quieres comprar tu nivel de inglés en cualquier parte del mundo, esta es tu mejor opción.",
          image: "/assets/cambridge.jpg",
          link: "https://www.cambridgeenglish.org/latinamerica/exams-and-tests/qualifications/",
        },
        {
          name: "CENNI (SEP)",
          description:
            "Certificación valida solo en México. Si lo necesitas comprobar tu nivel de inglés para obtener tu titulo universitario o obtener un empleo en México, esta es tu mejor opción.",
          image: "/assets/cenni.jpg",
          link: "https://dgair.sep.gob.mx/dir/cenni",
        },
        {
            name: "ELET by UKS",
            description:
              "El ELeT es un examen de acreditación del nivel de inglés computarizado y con resultados inmediatos. Se encuentra alineado al marco común europeo y al programa de Certificación Nacional del Nivel de Idioma (CENNI) de la SEP.",
            image: "/assets/ELET_UKS.jpg",
            link: "https://www.uks.mx/productos/elet/",
          },
      ];

  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Certifícate con nosotros</h1>
        <p>Prueba tu conocimiento del inglés.</p>
        <br></br>
      </div>
    </div>

    <section className="certifications">
      <h2 className="title">Nuestras Certificaciones</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={cert.image} alt={cert.name} className="certification-image" />
            <br></br><br></br>
            <h3>{cert.name}</h3>
            <p>{cert.description}</p>
            <a href={cert.link} target='_blank' className="certification-link">Más información</a>
          </motion.div>
        ))}
      </div>
    </section>

    </section>
  );
}

export default CertificacionesIngles;
