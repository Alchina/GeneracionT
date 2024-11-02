import React, { useState, useEffect } from 'react';
import './App.css';
const ContadorAutomatico = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(prevContador => prevContador + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="contador-container">
      <h1>Contador Automático</h1>
      <div className="contador">{contador}</div>
    </div>
  );
};

export default ContadorAutomatico;
