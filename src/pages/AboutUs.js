// src/pages/HomeUs.js
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react"; // ✅ Import hooks
import { motion } from "framer-motion";



function AboutUs() {

  const [data, setData] = useState([]); // ✅ Initialize state

    useEffect(() => {
        //fetch("http://culturlingua-react.free.nf/api-public.php") // ✅ Make sure the path is correct
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
        <h1>Abous Us</h1>
        <p>Get to know Culturlingua, where you do learn languages.</p>
        <br></br>
      </div>
    </div>

    <section className="sobre-nosotros">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
Enjoy a break and study Spanish in Guadalajara with a tailor-made, personalized program suiting your personal education needs. Everybody learns differently, so let us help you gain confidence in speaking, reading and writing Spanish at your own pace and at your own level.
</motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
Totally immerse yourself in an experience perfect to help you learn Spanish, whilst living and breathing the Mexican way of life. Take advantage of our homestay accommodation service, or stay in one of the many wonderful hotels in Tlaquepaque, a vibrant, yet quaint and picturesque corner of Guadalajara. The perfect place to experience Mexico's truly unique and rich culture.
</motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
<motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
While staying here, meander through Tlaquepaque's beautiful cobbled streets and discover its famous artisanal handicrafts. Venture further into Guadalajara, the land of tequila and mariachi and Mexico’s second largest city. Also known as the 'Pearl of the West', Guadalajara offers the conveniences of any large metropolitan city, yet manages to retain its Spanish, colonial charm. Spanish classes can be taken in the school or if you prefer, our teachers are happy to teach Spanish while visiting cafes, museums or simply visiting the local market! 
</motion.p>        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
Whether you want to study Spanish for fun, for business, or to simply immerse yourself in the Spanish-speaking culture, we will do our best to accommodate you in whatever way possible.Please take advantage of our free test online, to assess your current level of Spanish.
</motion.p>
<motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
Improve your confidence and oral Spanish language skills in your own personal one-to-one classes with our experienced and qualified teaching staff.

</motion.p>
      </div>
    </section>

    </section>
  );
}

export default AboutUs;
