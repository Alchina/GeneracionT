import React from 'react';
import './Comida.css'; 

const Comida = ({ tipo, ingredientes }) => {
  return (
    <div className="comida-container">
      <h1 className="comida-titulo">{tipo}</h1>
      <p className="comida-ingredientes">{ingredientes.join(', ')}</p>
    </div>
  );
};

export default Comida;
