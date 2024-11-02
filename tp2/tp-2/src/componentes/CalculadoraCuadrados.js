import React, { useState } from 'react';
import './App.css'; 

const CalculadoraCuadrados = () => {
  const [numero, setNumero] = useState('');
  const [cuadrado, setCuadrado] = useState(null);

  const calcularCuadrado = (e) => {
    const valor = e.target.value;

    if (valor === '' || !isNaN(valor)) {
      setNumero(valor);
      setCuadrado(valor ? valor * valor : null);
    }
  };

  return (
    <div className="calculadora-container">
      <h1>Calculadora de Cuadrados</h1>
      <input
        type="number"
        value={numero}
        onChange={calcularCuadrado}
        placeholder="Ingresa un número"
      />
      {cuadrado !== null && <p>El cuadrado de {numero} es: {cuadrado}</p>}
    </div>
  );
};

export default CalculadoraCuadrados;
