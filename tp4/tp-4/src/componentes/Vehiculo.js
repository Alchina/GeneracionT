import React from 'react';
import './Vehiculo.css'; 

const Vehiculo = ({ nombre, velocidadMaxima }) => {
  return (
    <div className="vehiculo-container">
      <h1 className="vehiculo-titulo">{nombre}</h1>
      <p className="vehiculo-velocidad">Velocidad Máxima: {velocidadMaxima} km/h</p>
    </div>
  );
};

export default Vehiculo;
