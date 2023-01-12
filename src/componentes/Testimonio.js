import React from "react";
import '../hojas-estilos-css/Testimonio.css';
function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        src={require('../images/mujer1.jpg')}
        alt='Foto de mujer' />
        <div className='contenedor-texto-testimonio'>
        <p className="nombre-testimonio"> Ada LoveLace</p>
        <p className="cargo-testimonio"> La primera programadora informática del mundo</p>
        <p className="texto-testimonio"> Nacida en 1815,  fue una una matemática
          en la época victoriana conocida por sus significativos   aportes a la computadora
          mecánica y el motor analítico creado por Charles Babbage.</p>
      </div>
    </div>
  );
}
export default Testimonio;
