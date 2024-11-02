import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { name: "Portfolio Web", description: "Portfolio en React" },
  { name: "Lista de Tareas", description: "Aplicación para gestión de tareas" },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section className="container text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }} onClick={() => setSelectedProject(project)}>
            {project.name}
          </motion.li>
        ))}
      </ul>
      {selectedProject && (
        <motion.div initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          <h3>{selectedProject.name}</h3>
          <p>{selectedProject.description}</p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
