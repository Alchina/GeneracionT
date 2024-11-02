import React from 'react';
import './SuperHeroe.css'; 

const SuperHeroe = ({ nombre, superpoder }) => {
  return (
    <div className="superheroe-container">
      <h1 className="superheroe-titulo">{nombre}</h1>
      <p className="superheroe-poder">{superpoder}</p>
    </div>
  );
};

export default SuperHeroe;
