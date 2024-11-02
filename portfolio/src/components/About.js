import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section className="container text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h2>Sobre mí</h2>
    <p>Estudiante de informática con experiencia en desarrollo web, especializado en React.</p>
  </motion.section>
);

export default About;
