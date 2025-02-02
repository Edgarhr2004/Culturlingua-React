// src/pages/Home.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Welcome to Culturlingua</h1>
        <p>Your place to learn languages with certified teachers!</p>
        <br></br>
        <button className="cta-button">Explore Courses</button>
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
        <ul>
          <li>Profesores certificados y experimentados</li>
          <li>Ambiente de aprendizaje dinámico</li>
          <li>Acceso a materiales exclusivos</li>
          <li>Plataforma virtual complementaria</li>
        </ul>
      </section>

       {/* Skills Section - Full Width */}
       <section className="skills-section">
        <div className="skill speaking">
          <img src="/speaking.jpg" alt="Speaking" />
          <div className="skill-content">
            <h3>🗣️ Hablar</h3>
            <p>Mejora tu fluidez y confianza al hablar.</p>
          </div>
        </div>
        <div className="skill reading">
          <img src="/reading.jpg" alt="Reading" />
          <div className="skill-content">
            <h3>📖 Leer</h3>
            <p>Desarrolla tu comprensión lectora con textos auténticos.</p>
          </div>
        </div>
        <div className="skill listening">
          <img src="/listening.jpg" alt="Listening" />
          <div className="skill-content">
            <h3>🎧 Escuchar</h3>
            <p>Entrena tu oído con audios y diálogos reales.</p>
          </div>
        </div>
        <div className="skill writing">
          <img src="/writing.jpg" alt="Writing" />
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
          <div className="date-item">
            <span>📅</span>
            <p>13 de Enero 2025</p>
          </div>
          <div className="date-item">
            <span>📅</span>
            <p>03 de Marzo 2025</p>
          </div>
          <div className="date-item">
            <span>📅</span>
            <p>19 de Mayo 2025</p>
          </div>
          <div className="date-item">
            <span>📅</span>
            <p>07 de Julio 2025</p>
          </div>
          <div className="date-item">
            <span>📅</span>
            <p>08 de Septiembre 2025</p>
          </div>
          <div className="date-item">
            <span>📅</span>
            <p>27 de Octubre 2025</p>
          </div>
        </div>
      </section>


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
    </section>
  );
}

export default Home;
