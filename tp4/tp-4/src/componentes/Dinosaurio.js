import React from 'react';
import './Dinosaurio.css'; 

const Dinosaurio = ({ nombre, dieta }) => {
  return (
    <div className="dinosaurio-container">
      <h1 className="dinosaurio-titulo">{nombre}</h1>
      <p className="dinosaurio-dieta">{dieta}</p>
    </div>
  );
};

export default Dinosaurio;
