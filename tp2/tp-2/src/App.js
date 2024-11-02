import React from 'react';
import ContadorAutomatico from './componentes/ContadorAutomatico';
import CalculadoraCuadrados from './componentes/CalculadoraCuadrados';
import PrecioTotalProductos from './componentes/PrecioTotalProductos';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ContadorAutomatico />
      <CalculadoraCuadrados />
      <PrecioTotalProductos />
    </div>
  );
}

export default App;
