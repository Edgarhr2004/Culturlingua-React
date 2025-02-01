// src/pages/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you soon.");
  };

  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input className="block w-full p-2 mb-2 border" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="block w-full p-2 mb-2 border" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea className="block w-full p-2 mb-2 border" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
