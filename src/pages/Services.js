// src/pages/Services.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCoffee, FaHome, FaPlane, FaLanguage, FaWifi, FaTripadvisor, FaInfo } from 'react-icons/fa';


function Services() {

    const services = [
        { icon: <FaCoffee />, title: "Complimentary", description: "Complimentary brewed coffee and fresh fruit during your Spanish classes." },
        { icon: <FaWifi />, title: "Free Internet", description: "Free use of the school internet and computers" },
        { icon: <FaPlane />, title: "Airport Pickup", description: "Hassle-free arrival/departure with our pickup service." },
        { icon: <FaLanguage />, title: "Cultural Exchange", description: "Use this opportunity to practice your Spanish and help a Mexican improve their English while getting to see and visit places only the locals know about." },
        { icon: <FaHome />, title: "Homestay", description: "Assistance to find the ideal accommodation for your stay " },
        { icon: <FaTripadvisor />, title: "Activities", description: "We help you to plan activities while you are here in México" },
        { icon: <FaInfo />, title: "Tourist Information", description: "Free tourist information in Spanish or English." },
      ];

  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Our Services Catalog</h1>
        <br></br>
      </div>
    </div>

    <section className="foreign-services">
        <h2 className="section-title">🌎 Services for Foreign Students</h2>
        <p className="section-description">Everything you need for a smooth and enriching study experience in Mexico.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Services;
