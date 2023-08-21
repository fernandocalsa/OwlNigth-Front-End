import React from 'react';
import apiServiceInstance from '../../connect/apiService';

//TODO 
// ESTE ES EL BOTÓN PARA AÑADIR LOS LOCALES A LA BASE DE DATOS

const ButtonAddLocal = ({ children }) => {
  const handleAddLocal = async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtén los valores de los campos del formulario
    const formData = new FormData(event.target);
  
    try {
      // Llama a la función de API para agregar el local
      const response = await apiServiceInstance.addLocal(formData);
  
      console.log('Local añadido:', response.message);
      // Lógica adicional después de agregar el local
    } catch (error) {
      console.error('Error al añadir el local:', error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleAddLocal}>
        <button type="submit">{children}</button>
      </form>
    </div>
  );
};

export default ButtonAddLocal;
