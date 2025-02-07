import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {

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
          <h1>Contact Us</h1>
          <p>A través de nuestros diferentes canales.</p>
          <br></br>
        </div>
      </div>

      <br></br><br></br>

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

export default Contact;
