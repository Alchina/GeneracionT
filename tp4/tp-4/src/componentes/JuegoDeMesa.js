import React, { Component } from 'react';
import './JuegoDeMesa.css';

class JuegoDeMesa extends Component {
  render() {
    const { nombre, mostrarAlerta } = this.props;

    return (
      <div className="juego-container">
        <h1 className="juego-titulo">{nombre}</h1>
        <button className="juego-boton" onClick={() => mostrarAlerta(nombre)}>Mostrar Alerta</button>
      </div>
    );
  }
}

export default JuegoDeMesa;
