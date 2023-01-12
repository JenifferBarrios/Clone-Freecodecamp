import './App.css';
import '../src/hojas-estilos-css/Testimonio.css';
import Testimonio from '../src/componentes/Testimonio'
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mujeres programadoras que triunfaron en el mundo de la tecnología</h1>
        <Testimonio />
      </div>          
    </div>
  );
}

export default App;
