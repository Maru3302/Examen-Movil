import React, { useState } from 'react';

function Formulario({ guardarDatos }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    numeroCelular: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validarNombre = (nombre) => {
    return /^[a-zA-Z]+$/.test(nombre);
  };

  const validarNumeroCelular = (numeroCelular) => {
    return /^\d{10}$/.test(numeroCelular);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validarNombre(formData.nombre) &&
      validarNombre(formData.apellidoPaterno) &&
      validarNombre(formData.apellidoMaterno) &&
      validarNumeroCelular(formData.numeroCelular)
    ) {
      console.log(formData);
      guardarDatos(formData);
      setFormData({
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        numeroCelular: '',
      });
    } else {
      alert("Por favor, complete los campos correctamente.");
    }
  };

  return (
    <div>
      <h1>Formulario React con Estados</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
          <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellidoMaterno">Apellido Materno:</label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="numeroCelular">Número de Celular:</label>
          <input
            type="text"
            id="numeroCelular"
            name="numeroCelular"
            value={formData.numeroCelular}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Guardar</button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                nombre: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                numeroCelular: '',
              })
            }
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
