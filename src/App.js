import './App.css';

import Testimonio from '../src/componentes/Testimonio'
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mujeres programadoras que triunfaron en el mundo de la tecnología</h1>
        <Testimonio
        nombre= 'Pepita perez'
        pais='Suecia'
        imagen= 'mujer1'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='lojbkltngklamglamklvnaklnknmflkamlkmlkojbknbkjfhiqwhnoifnltngklamglamklvnaklkmlk' 
        />
        <Testimonio
        nombre= 'Juancho Manjarrez'
        pais='Colombia'
        imagen= 'mujer1'
        cargo='Ingeniero de Software'
        empresa='Avianca'
        testimonio='lojbkltngklamglamklvnaklnknmflkamlkmlkojbkltnbkjfaeiufiowfonalskcjioahfoiqwjengklamg
        lamklvnaklnknmhgauhfjksafmn klnckancflkamlkmlk' 
        />
        <Testimonio
        nombre= 'Sarita Paz'
        pais='Singapure'
        imagen= 'mujer1'
        cargo='Ingeniera de Software'
        empresa='Mercado Libre'
        testimonio='lojbkltngklamglamklvnaklnknmflkamlkmlkojbkltngklbkjwgblsnkñlgkhdsmrelñmyiwfn
        ahwifjasnckfamsn' 
        />
      </div>          
    </div>
  );
}

export default App;
