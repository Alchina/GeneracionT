import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1>My E-Commerce</h1>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
      </button>
    </header>
  );
};

export default Header;
