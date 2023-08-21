import React from 'react';
import axios from 'axios';

const ButtonAddLocal = () => {
  const handleAddLocal = async () => {
    try {
      const newLocal = {
        discoName: '',
        deals: 0,
        imgUrl: '' // Reemplaza con la URL de la imagen que deseas usar
      };

      // Realiza la llamada a la API para agregar el local
      const response = await axios.post('http://localhost:4000/locals', newLocal);
      console.log('Local añadido:', response.data);
    } catch (error) {
      console.error('Error al añadir el local:', error);
    }
  };

  return (
    <div>
      <button onClick={handleAddLocal}>Añadir Local</button>
    </div>
  );
};

export default ButtonAddLocal;
