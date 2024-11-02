import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por tu mensaje, ${formData.name}!`);
  };

  return (
    <motion.section className="container text-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Correo" onChange={handleInputChange} required />
        <textarea name="message" placeholder="Mensaje" onChange={handleInputChange} required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </motion.section>
  );
};

export default Contact;
