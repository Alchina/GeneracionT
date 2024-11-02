import React, { useState } from 'react';
import './App.css'; 

const PrecioTotalProductos = () => {
  const [productos, setProductos] = useState([
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 15 },
  ]);

  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    <div className="productos-container">
      <h1>Precio Total de Productos</h1>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.nombre}: ${producto.precio}
          </li>
        ))}
      </ul>
      <h2>Total: ${calcularTotal()}</h2>
    </div>
  );
};

export default PrecioTotalProductos;
