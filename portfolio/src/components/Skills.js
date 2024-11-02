import React from 'react';
import { motion } from 'framer-motion';

const skills = ["React", "JavaScript", "CSS", "HTML", "Node.js"];

const Skills = () => (
  <motion.section className="container text-center" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
    <h2>Habilidades</h2>
    <ul>
      {skills.map((skill, index) => (
        <motion.li key={index} whileHover={{ scale: 1.1 }}>
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.section>
);

export default Skills;
