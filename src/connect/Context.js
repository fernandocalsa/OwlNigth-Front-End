import React, { createContext, useContext, useState, useEffect } from 'react';
import apiServiceInstance from '../connect/apiService';


const LastLocalContext = createContext();

export const useLastLocalsContext = () => {
    return useContext(LastLocalContext);
};

export const LastLocalProvider = ({ children }) => {
    const [lastLocals, setLastLocals] = useState([]);

    const getNewsLocals = (newLocal) => {
        setLastLocals((prevLocals) => {
            const updatedLocals = [...prevLocals, newLocal].slice(-3);
            return updatedLocals;
        });
    };

    useEffect(() => {
        const fetchLatestLocals = async () => {
          try {
            const data = await apiServiceInstance.getLatestLocals();
            setLastLocals(data);
            console.log(data, "esto es lo que le paso a LastLocals");
          } catch (error) {
            console.error('Error al obtener los últimos locales en el contexto:', error);
          }
        };
    
        fetchLatestLocals();
      }, []);

    return (
        <LastLocalContext.Provider value={{ lastLocals, getNewsLocals, useLastLocalsContext, LastLocalProvider }}>
            {children}
        </LastLocalContext.Provider>
    );
};
