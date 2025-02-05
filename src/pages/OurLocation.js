// src/pages/OurLocation.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaMapMarkerAlt } from 'react-icons/fa';


function OurLocation() {

  return (
    <section className="">
        <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Our Location</h1>
        <p>Explore the wonders of Mexico, with us.</p>
        <br></br>
      </div>
    </div>

    <section className="location-container">
      <h2 className="section-title">📍 Where We Are Located</h2>
      <p className="section-description">
        Discover the beauty of Mexico, the charm of Jalisco, and the magic of Tlaquepaque!
      </p>

      <div className="location-grid">
        {/* Mexico Showcase */}
        <div className="location-card mexico">
          <h3>🇲🇽 Mexico</h3>
          <p>Land of rich culture, delicious food, and breathtaking landscapes.</p>
          <img src="/assets/mexico.jpg" alt="Mexico" />
        </div>
        
        {/* Jalisco Showcase */}
        <div className="location-card jalisco">
          <h3>🌵 Jalisco</h3>
          <p>The birthplace of mariachi, tequila, and incredible traditions.</p>
          <img src="/assets/jalisco.jpg" alt="Jalisco" />
        </div>

        {/* Tlaquepaque Showcase */}
        <div className="location-card tlaquepaque">
          <h3>🎭 Tlaquepaque</h3>
          <p>A magical town full of colorful streets, art, traditions, and vibrant life.</p>
          <img src="/assets/tlaquepaque.jpg" alt="Tlaquepaque" />
        </div>
      </div>
      <br></br><br></br>
      {/* Map Section */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.790690850651!2d-103.31288652577223!3d20.637386701107793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3b317ea78ef%3A0xa00c5f440c6b46b3!2sCulturlingua!5e0!3m2!1sen!2smx!4v1738696722222!5m2!1sen!2smx" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       

    </section>
    </section>
  );
}

export default OurLocation;
