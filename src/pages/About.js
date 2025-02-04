// src/pages/Home.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react"; // ✅ Import hooks
import { motion } from "framer-motion";



function About() {

  const [data, setData] = useState([]); // ✅ Initialize state

    useEffect(() => {
        //fetch("http://culturlingua-react.free.nf/api-public.php") // ✅ Make sure the path is correct
        fetch("http://localhost/LinguaHub-React/api.php")
            .then((response) => response.json())
            .then((data) => setData(data)) // ✅ Save API response
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Sobre Nosotros</h1>
        <p>Conoce Culturlingua, donde sí aprendes idiomas.</p>
        <br></br>
      </div>
    </div>

    <section className="sobre-nosotros">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Sobre Nosotros
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Culturlingua es un instituto ubicado en el centro de Tlaquepaque y con experiencia de más de 20 años de enseñanza del idioma ingles a estudiantes de habla hispana, así como la impartición de clases de español para personas nativas de otro idioma; Culturlingua Tlaquepaque es un miembro orgulloso de la Cadena Culturlingua con sedes en diferentes ciudades y ofreciendo sus servicios en nuestra ciudad desde el año 2004.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          ¿Qué hace diferente a Culturlingua? Culturlingua es diferente porque nos preocupamos por nuestros estudiantes. Nuestros maestros son profesionales y calificados, usan toda su experiencia, conocimientos y herramientas, para asegurarse que los alumnos aprendan durante el curso, de la manera más amena, divertida, amigable y dinámicamente posible.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          La experiencia que nos dan nuestros más de 20 años nos permite ofrecerle a usted programas de calidad que le ayudaran a lograr su objetivo de aprender algún idioma de una forma amena, fácil y lo más importante accesible, gracias a un sistema de enseñanza diferente, basado en la experiencia profesional de nuestros maestros.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Te invitamos a vivir la experiencia de aprender un nuevo idioma en un ambiente amistoso y cordial sin olvidar nuestra orientación profesional.
        </motion.p>
      </div>
    </section>

    </section>
  );
}

export default About;
