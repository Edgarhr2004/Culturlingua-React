// src/pages/SpanishFees.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


function SpanishFees() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Our Spanish Lessons Fees</h1>
        <p>"Don't limit your challenges, challenge your limits."</p>
        <br></br>
      </div>
    </div>

    <section className="about-linguahub">
          <h2>Our Fees</h2>
          <p>
          Our classes are planned to meet your learning needs. Your class can start any Monday in the year. Just let us know when you want to start 2 weeks prior your Spanish Immersion, in order to plan teachers' schedules and class materials.
          </p>
          <p>Features of Culturlingua Tlaquepaque’s Pricing structure.
          </p>
          <p>We do not charge registration fees.</p>
        </section>

        <section className="certifications">
      <div className="certifications-container">
        
          <motion.div
            className="certification-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="./assets/fees1.avif" className="certification-image" />
            <br></br><br></br>
            <h3>Face-To-Face or Online Sessions</h3>
            <p>You can choose between online classes or study at our school</p>
          </motion.div>
          <motion.div
            className="certification-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="./assets/fees2.avif" className="certification-image" />
            <br></br><br></br>
            <h3>5 days a week</h3>
            <p>The classes have a duration of 4 hours per day normally, 5 days a week but we are adaptable to your necessities.</p>
          </motion.div>
          <motion.div
            className="certification-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="./assets/fees3.avif" className="certification-image" />
            <br></br><br></br>
            <h3>Materials Included</h3>
            <p>All the material is included, just bring a notebook and a pen.</p>
          </motion.div>
      </div>
    </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Fees Schedule</h2>
        <img src="./assets/fees.avif"></img>
        <p>We gladly accept payment in Pesos, Dollars, Travelers checks, PayPal or Credit cards</p>
        <p>*** We will gladly pick you up from the airport and take you direct to your accommodation for a charge of $20 USD ***</p>
      </section>

      {/* More Information Section */}
            <section className="more-info-section">
              <h2>More Info</h2>
              <div className="info-links">
                <Link to="/Placement-Test">📚 Placement Test</Link>
                <Link to="/spanish">✍️ Lessons</Link>
                <Link to="/contacto">📩 Contact Us</Link>
              </div>
              <br></br>
            </section>

    </section>
  );
}

export default SpanishFees;
