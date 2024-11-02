import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>El carrito está vacío</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.id} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <strong>{item.name}</strong> - ${item.price} x {item.quantity}
              <button 
                onClick={() => removeFromCart(item.id)} 
                style={{ marginLeft: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px', padding: '5px 10px', cursor: 'pointer' }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 style={{ textAlign: 'center' }}>
        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};

export default Cart;
