// src/pages/Home.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks
import emailjs from 'emailjs-com';


function Home() {

  const [data, setData] = useState([]); // ✅ Initialize state

    useEffect(() => {
        //fetch("http://culturlingua-react.free.nf/api-public.php") // ✅ Make sure the path is correct
        fetch("http://localhost/LinguaHub-React/api.php")
            .then((response) => response.json())
            .then((data) => setData(data)) // ✅ Save API response
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Collect form data
      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      // Send email using the new EmailJS template
      emailjs.send(
        'service_9lb5qor',      // Replace with your new service ID
        'template_lbosaog',      // Replace with the new template ID
        data,                   // Send form data as variables to the template
        'E34tJabSp_CQoJAQZ'          // Replace with your user ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert("Tu formulario ha sido enviado exitosamente.");
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        alert("Hubo un error al enviar tu formulario. Intenta nuevamente.");
      });
    };

  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Welcome to Culturlingua</h1>
        <p>Donde sí aprendes idiomas.</p>
        <br></br><br></br>
        <Link to="/Cursos" className="cta-button">Explorar Cursos</Link>
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

      {/* Benefits Section */}
      <section className="benefits">
        <h2>¿Por qué estudiar con nosotros?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🎓 Profesores Certificados</h3>
            <p>Aprende con docentes expertos y calificados.</p>
          </div>
          <div className="benefit-card">
            <h3>📚 Material Exclusivo</h3>
            <p>Accede a recursos complementarios y libros.</p>
          </div>
          <div className="benefit-card">
            <h3>💻 Plataformas Virtuales</h3>
            <p>Aprende con herramientas interactivas en línea.</p>
          </div>
          <div className="benefit-card">
            <h3>🌎 Clases Presenciales y Online</h3>
            <p>Estudia desde cualquier lugar o en nuestras aulas.</p>
          </div>
          <div className="benefit-card">
            <h3>🏆 Certificación Oficial</h3>
            <p>Obtén diplomas y certificaciones internacionales.</p>
          </div>
          <div className="benefit-card">
            <h3>💯 Cursos garantizados</h3>
            <p>Si repruebas el nivel, lo repites totalmente GRATIS.</p>
          </div>
          <div className="benefit-card">
            <h3>🎯 Talleres especializados</h3>
            <p>Talleres enfocados en tu aprendizaje mediante la practica de tus habilidades.</p>
          </div>
          <div className="benefit-card">
            <h3>🗣️ Intercambio de idiomas</h3>
            <p>Podrás intercambiar idiomas con personas extranjeras.</p>
          </div>
        </div>
      </section>

      <section className="about-linguahub">
      <h2>¿Qué es LinguaHub?</h2>
      <p>
        LinguaHub es una plataforma de aprendizaje de idiomas diseñada para ofrecer
        una experiencia educativa completa, con herramientas interactivas, contenido
        personalizado y acceso a profesores certificados. Ya sea que desees mejorar
        tus habilidades lingüísticas o comenzar desde cero, LinguaHub te brinda los
        recursos para lograr tus metas.
      </p>
      <Link to="/linguahub" className="cta-button">Descubre más</Link>
    </section>



       {/* Skills Section - Full Width */}
       <section className="skills-section">
        <div className="skill speaking">
          <div className="skill-content">
            <h3>🗣️ Hablar</h3>
            <p>Mejora tu fluidez y confianza al hablar.</p>
          </div>
        </div>
        <div className="skill reading">
          <div className="skill-content">
            <h3>📖 Leer</h3>
            <p>Desarrolla tu comprensión lectora con textos auténticos.</p>
          </div>
        </div>
        <div className="skill listening">
          <div className="skill-content">
            <h3>🎧 Escuchar</h3>
            <p>Entrena tu oído con audios y diálogos reales.</p>
          </div>
        </div>
        <div className="skill writing">
          <div className="skill-content">
            <h3>✍️ Escribir</h3>
            <p>Aprende a expresarte de forma clara y precisa.</p>
          </div>
        </div>
      </section>

      {/* Course Types - Modalidades de Estudio */}
      <section className="modalidades">
        <h2>Modalidades de Estudio</h2>
        <div className="modalidades-container">
          {/* Presencial Classes */}
          <div className="modalidad">
            <img src="./assets/tlaquepaque_home.jpg" alt="Clases Presenciales" />
            <div className="modalidad-text">Presencial</div>
          </div>

          {/* Online Classes */}
          <div className="modalidad">
            <img src="./assets/tlaquepaque.avif" alt="Clases Online" />
            <div className="modalidad-text">Online</div>
          </div>
        </div>
      </section>


      {/* CEFR Based */}
      <section className="cefr">
        <h2>Metodología basada en el MCER</h2>
        <p>
          Nuestros cursos siguen el <strong>Marco Común Europeo de Referencia</strong> para garantizar una educación de calidad.
        </p>
        <img src="./assets/cefr.png" style={{maxWidth: "90%"}}></img>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Nuestros Socios</h2>
        <div className="partner-logos">
          <img src="/partner1.png" alt="Partner 1" />
          <img src="/partner2.png" alt="Partner 2" />
          <img src="/partner3.png" alt="Partner 3" />
        </div>
      </section>
      {/* Next Course Dates */}
    <section className="next-dates">
        <h2>Próximos inicios de cursos</h2>
        <div className="dates-grid">
          {data.map((user) => (
            <div className="date-item" key={user.id}>
              <span>📅</span>
              <p >{user.fecha}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Contact Form */}
      <section className="contact-form">
        <h2>¿Tienes preguntas? Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Tu Nombre" required />
          <input type="email" name="correo" placeholder="Tu Correo" required />
          <input type="text" name="telefono" placeholder="Tu Número Telefónico" required />
          <textarea name="pregunta" placeholder="Tu Pregunta" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <br></br><br></br>
    </section>
  );
}

export default Home;
