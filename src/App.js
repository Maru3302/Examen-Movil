import React, { useState } from 'react';
import TablaDatos from './Tabla';
import Formulario from './Formulario';

function App() {
  const [datos, setDatos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const agregarPersona = (nuevaPersona) => {
    setDatos([...datos, nuevaPersona]);
    setMostrarFormulario(false);
  };

  const eliminarPersona = (index) => {
    const nuevaLista = [...datos];
    nuevaLista.splice(index, 1);
    setDatos(nuevaLista);
  };

  return (
    <div className="App">
      <h1>Mi Aplicación de Tabla de Datos</h1>
      <button onClick={() => setMostrarFormulario(true)}>Añadir Persona</button>
      <TablaDatos datos={datos} eliminarPersona={eliminarPersona} /> 
      {mostrarFormulario && <Formulario guardarDatos={agregarPersona} />}
    </div>
  );
}

export default App;
