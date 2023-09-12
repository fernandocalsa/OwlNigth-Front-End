import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import apiServiceInstance from '../../connect/apiService';

// Crea el contexto
const DateContext = createContext();

// Hook personalizado para acceder al contexto
export const useDateContext = () => {
    return useContext(DateContext);
};

// Proveedor del contexto
export const DateProvider = ({ children }) => {
    const [availableDates, setAvailableDates] = useState([]);

    const setDates = (newDates) => {
        setAvailableDates(newDates);
        console.log(newDates);
        console.log(setAvailableDates);
    };
    // Función para obtener las fechas disponibles desde el servidor
  const fetchAvailableDates = async () => {
    try {
      const response = await apiServiceInstance.getAvailableDates();
      const datesFromServer = response.data.availableDates;
      setAvailableDates(datesFromServer);
    } catch (error) {
      console.error('Error al obtener las fechas disponibles:', error);
    }
  };

  useEffect(() => {
    // Llama a la función para cargar las fechas disponibles cuando se monta el componente
    fetchAvailableDates();
  }, []);

    return (
        <DateContext.Provider value={{ availableDates, setAvailableDates, setDates, fetchAvailableDates }}>
            {children}
        </DateContext.Provider>
    );
};
