import React from 'react';

function Tabla({ datos, eliminarPersona }) {
  return (
    <div>
      <h2>Datos Almacenados</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Número de Celular</th>
            <th>Acciones</th> 
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.apellidoPaterno}</td>
              <td>{item.apellidoMaterno}</td>
              <td>{item.numeroCelular}</td>
              <td>
                <button onClick={() => eliminarPersona(index)}>Borrar</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
