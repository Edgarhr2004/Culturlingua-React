// src/pages/PlacementTest.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"; // ✅ Import hooks


function PlacementTest() {
  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Spanish Placement Test</h1>
        <p>Take your time to answer the exam and be able to correctly assess your level of Spanish.</p>
        <br></br>
      </div>
    </div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAUxqvnptbdEq9a8j63_47BC8UqzxFR5K9E9VVts-MURrUiw/viewform?embedded=true" width="700" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
    </section>
  );
}

export default PlacementTest;
