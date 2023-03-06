import './App.css';

import Testimonio from '../src/componentes/Testimonio'
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mujeres programadoras que triunfaron en el mundo de la tecnología</h1>
        <Testimonio
        nombre= 'Radia Joy Perlman'
        pais='Estados Unidos'
        imagen= 'mujer1'
        cargo='Creadora de software e ingeniera de redes, experta en seguridad.'
        aporte='Logró crear el protocolo Spanning Tree Protocol (STP). STP es un lenguaje que permite la comunicación entre computadoras y también es utilizado para las redes LAN de acceso local y ethernet. Se puede decir que es la base para el funcionamiento del internet.' 
        />
        <Testimonio
        nombre= 'Susan Wojcicki'
        pais='Estados Unidos'
        imagen= 'mujer1'
        cargo='Directora ejecutiva de YouTube'
        aporte='primera mujer en trabajar en Google.A través de su puesto de marketing, Susan logró acuerdos con universidades para instalar un cuadro de búsqueda de Google gratis en las páginas webs de varias casas de estudios con el objetivo de conseguir visitas.' 
        />
        <Testimonio
        nombre= 'Hedwig Eva Maria Kiesler,'
        pais='Estados Unidos'
        imagen= 'mujer1'
        empresa='Coinventora del Wi-Fi. '
        aporte='Este invento funcionaba con 88 frecuencias equivalentes a las teclas de un piano y que era capaz de hacer señales de transmisión entre frecuencias de espectro magnético. Sería la antesala del WiFi  y del Bluetooth.' 
        />
      </div>          
    </div>
  );
}

export default App;
