// src/pages/Cursos.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function Cursos() {
    const courses = [
        {
          title: "Kinder",
          description: "4 a 6 años",
          link: "/courses/general-english"
        },
        {
          title: "Niños",
          description: "6 a 10 años",
          link: "/courses/business-english"
        },
        {
          title: "Jóvenes",
          description: "11 a 15 años.",
          link: "/courses/exam-preparation"
        },
        {
          title: "Adultos",
          description: "+15 años",
          link: "/courses/conversational-english"
        },
        {
          title: "Inglés intensivo",
          description: "Todas las edades",
          link: "/courses/french-beginner"
        },
        {
          title: "Clases Privadas",
          description: "Todas las edades",
          link: "/courses/spanish-for-foreigners"
        },
        {
          title: "Clases Empresariales",
          description: "Para el empleo",
          link: "/courses/travel-english"
        },
        {
          title: "Preparación para Examen",
          description: "+15 años",
          link: "/courses/pronunciation"
        },
        {
          title: "Cursos de Verano",
          description: "Para niños",
          link: "/courses/advanced-english"
        },
        {
          title: "Certificaciones",
          description: "De acuerdo a tu nivel",
          link: "/courses/french-intermediate"
        },
        {
          title: "Español para Extranjeros",
          description: "Aprende español con un enfoque en el mundo real.",
          link: "/courses/business-spanish"
        },
        {
          title: "Inglés Garantizado",
          description: "100%. Si repruebas, repites gratis.",
          link: "/courses/intensive-english"
        },
      ];
    

  const [data, setData] = useState([]); // ✅ Initialize state

    useEffect(() => {
        //fetch("https://culturlingua-react.free.nf/api-public.php") // ✅ Make sure the path is correct
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
        <h1>Conoce nuestros cursos</h1>
        <p>Explora nuestros diversos tipos, modalidades, y metodologías de cursos.</p>
        <br></br>
      </div>
      
    </div>
    <section className="courses-page">
      <div className="courses-description">
        <h1>Explora Nuestros Cursos</h1>
        <p>
          En Culturlingua, ofrecemos una variedad de cursos diseñados para adaptarse a tus necesidades y objetivos de aprendizaje. Desde inglés general hasta cursos especializados, tenemos algo para cada estudiante. Todos nuestros cursos están diseñados con un enfoque práctico, interactivo y flexible, garantizando que puedas aprender a tu propio ritmo, en cualquier lugar.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={course.link} className="course-link">Más Información</Link>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

export default Cursos;
