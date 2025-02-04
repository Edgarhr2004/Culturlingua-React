// src/pages/Ingles.online.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function InglesOnline() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Culturlingua Virtual</h1>
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

    <section className="benefits">
        <h2>¿Por qué estudiar con nosotros?</h2>
        <div className="benefits-grid">
            <div className="benefit-card">
                <div className="benefit-icon">
                    <i className="fas fa-graduation-cap"></i> {/* FontAwesome icon */}
                </div>
                <h3>✔️ Beneficios adicionales</h3>
                <p>Todos los beneficios de las clases presenciales incluidos.</p>
            </div>
            <div className="benefit-card">
              <h3>🎥 Acceso a Clases Grabadas</h3>
              <p>Si no puedes asistir, todas las lecciones están grabadas. ¡Véelas en cualquier momento!</p>
            </div>
            <div className="benefit-card">
              <h3>🏡 Comodidad de Estudiar Desde Casa</h3>
              <p>Estudia cómodamente sin desplazamientos. ¡Tu aula está donde tú estés!</p>
            </div>
            <div className="benefit-card">
              <h3>💻 Herramientas Interactivas</h3>
              <p>Clases dinámicas con pizarras interactivas, juegos educativos y foros de discusión.</p>
            </div>
            <div className="benefit-card">
              <h3>👨‍🏫 Tutorías y Soporte Personalizado</h3>
              <p>Recibe ayuda individualizada de nuestros docentes.* ¡Nunca estarás solo!</p>
            </div>
            <div className="benefit-card">
              <h3>💡 Clases Especializadas en Habilidades Digitales</h3>
              <p>Desarrolla tus competencias digitales mientras aprendes el idioma. ¡El futuro está online!</p>
            </div>
            <div className="benefit-card">
              <h3>📚 Material Exclusivo en Línea</h3>
              <p>Accede a recursos digitales diseñados específicamente para mejorar tu aprendizaje.</p>
            </div>
            <div className="benefit-card">
              <h3>📅 Acceso 24/7 a Recursos de Aprendizaje</h3>
              <p>Las plataformas está disponible todo el día. ¡Recursos siempre a tu disposición!</p>
            </div>
            <div className="benefit-card">
              <h3>🧑‍💻 Clases con Profesores en Vivo</h3>
              <p>Interactúa en tiempo real con nuestros profesores altamente capacitados.</p>
            </div>
            <div className="benefit-card">
              <h3>🔒 Seguridad y Privacidad</h3>
              <p>Disfruta de una experiencia de aprendizaje segura, con tus datos protegidos en todo momento.</p>
            </div>
        </div>
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

export default InglesOnline;
