// src/pages/SpanishClasses.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons



function SpanishClasses() {

    // Testimonials Data
  const testimonials = [
    {
      text: "Culturlingua provided us with the customized, flexible learning environment that we were looking for. This was one of our best Spanish immersion experiences while traveling and studying abroad in Mexico. We were able to greatly improve our Spanish-speaking skills and fluency within a two-week timeframe.The Culturlingua staff was focused on preparing and delivering classes that were individualized and tailored to our needs. Using creative methods, we were able to learn new concepts, review grammar and practice our conversation skills. After our classes, we’d use what we learned in every-day living situations such as shopping in the market, riding the bus, catching a taxi or dining in a restaurant.We highly recommend studying Spanish at Culturlingua in Tlaquepaque, Mexico. We discovered that we were able to gain confidence in speaking, reading and writing at our own pace and our own level!",
      author: "Jeff Groce",
      rating: 5,
    },
    {
      text: "Very good",
      author: "María Esther Alatorre",
      rating: 5,
    },
  ];

  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Spanish Lessons at Culturlingua</h1>
        <p>Your place to learn Spanish with certified and experienced teachers.</p>
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
        <h2>Why Culturlingua?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🎯 Learn</h3>
            <p>Learn Spanish in a colonial and friendly environment in the beautiful and picturesque city of Tlaquepaque.</p>
          </div>
          <div className="benefit-card">
            <h3>🗣️ Language Exchange</h3>
            <p>In our language center you can exchange language with students who want to learn your language.</p>
          </div>
          <div className="benefit-card">
            <h3>🎓 Qualified Teachers</h3>
            <p>All our teachers are qualified to teach Spanish.</p>
          </div>
          <div className="benefit-card">
            <h3>🌎 Cultural activities</h3>
            <p>Enjoy walking around the beautiful surroundings of Jalisco while you are able to learn about Mexican culture and the Spanish language.</p>
          </div>
        </div>
      </section>



      {/* Course Types - Modalidades de Estudio */}
      <section className="modalidades">
        <h2>Lesson types</h2>
        <div className="modalidades-container">
          {/* Presencial Classes */}
          <div className="modalidad">
            <img src="./assets/tlaquepaque_home.jpg" alt="Clases Presenciales" />
            <div className="modalidad-text">Face-to-Face</div>
          </div>

          {/* Online Classes */}
          <div className="modalidad">
            <img src="./assets/tlaquepaque.avif" alt="Clases Online" />
            <div className="modalidad-text">Online</div>
          </div>
        </div>
      </section>


      {/* More Information Section */}
      <section className="more-info-section">
        <h2>More Info</h2>
        <div className="info-links">
          <Link to="/Placement-Test">📚 Placement Test</Link>
          <Link to="/spanish/fees">💰 Fees & Payments</Link>
          <Link to="/contacto">📩 Contact Us</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Lo que dicen nuestros estudiantes</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>“{testimonial.text}”</p>
              <div className="stars">
                {[...Array(5)].map((_, i) => 
                  i < testimonial.rating ? <FaStar key={i} className="star" /> : <FaRegStar key={i} className="star empty" />
                )}
              </div>
              <h4>- {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </section>



      {/* Partners Section */}
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <img src="/partner1.png" alt="Partner 1" />
          <img src="/partner2.png" alt="Partner 2" />
          <img src="/partner3.png" alt="Partner 3" />
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Any Questions? Contact Us</h2>
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

export default SpanishClasses;
