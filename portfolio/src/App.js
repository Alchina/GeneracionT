import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      {/* Encabezado con fondo degradado */}
      <header>
        <h1>Tomas Santiago Alsina</h1>
      </header>

      {/* Contenedor principal */}
      <div className="container">
        
        {/* Otras secciones: Habilidades, Experiencia, Proyectos */}
        <section id="habilidades">
          <h2>Habilidades</h2>
          <div className="card">
            <p>Desarrollo en JavaScript, React, Node.js, PHP,C++</p>
          </div>
        </section>
        
        <section id="experiencia">
          <h2>Experiencia</h2>
          <div className="card">
            <p>Experiencia como desarrollador de software en diversos proyectos.</p>
          </div>
        </section>
        <section id="proyectos">
          <h2>Proyectos</h2>
          <div className="project-card card">
            <h4>Proyecto 1</h4>
            <a href='https://github.com/Alchina/LGBTIQ.ALSINA.github.io.git'><h4>LGBTIQ</h4></a>
          </div>
          <div className="project-card card">
          <h4>Proyecto 2</h4>
            <a href='https://github.com/Alchina/Formula1_appy.git'><h4>Formula 1 </h4></a>
          </div>
          <div className="project-card card">
          <h4>Proyecto 3</h4>
            <a href='https://github.com/Alchina/arduino.github.io.git'><h4>Arduino </h4></a>
          </div>

        </section>
        {/* Sección de Contacto */}
        <section id="contacto">
          <h2>Contacto</h2>
          <div className="card contact-card">
            <p>📞 Teléfono: 2235679845</p>
            <p>📧 Gmail: tomasalsina248@gmail.com</p>
            <p>🔗 GitHub: <a href="https://github.com/Alchina" target="_blank" rel="noopener noreferrer">https://github.com/Alchina</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
