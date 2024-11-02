import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Galletitas Don Satur', price: 1000 },
  { id: 2, name: 'Coca Cola', price: 1600 },
  { id: 3, name: 'Doritos', price: 2000 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Lista de Productos</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <strong>{product.name}</strong> - ${product.price}
            <button 
              onClick={() => addToCart(product)} 
              style={{ marginLeft: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '3px', padding: '5px 10px', cursor: 'pointer' }}>
              Agregar al Carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
