// src/pages/Home.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';


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
      <br></br><br></br>
    </section>
  );
}

export default Home;
