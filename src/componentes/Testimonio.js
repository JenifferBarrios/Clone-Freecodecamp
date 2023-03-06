import React from "react";
import '../hojas-estilos-css/Testimonio.css';
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        src={require(`../images/${props.imagen}.jpg`)}
        alt='Foto de mujer' />
        <div className='contenedor-texto-testimonio'>
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> {props.pais}</p>
        <p className="cargo-testimonio"> {props.cargo} <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio"> {props.aporte}</p>
      </div>
    </div>
  );
}
export default Testimonio;
