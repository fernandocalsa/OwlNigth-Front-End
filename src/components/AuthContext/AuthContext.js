import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiServiceInstance from '../../connect/apiService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [localData, setLocalData] = useState(null);


  const isProManager = () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const decodedToken = JSON.parse(atob(storedToken.split('.')[1]));
        if (decodedToken && decodedToken.userType === 'proManager') {
          return true;
        }
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
    return false;
  };

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    console.log("Hasta luego!");
    setTimeout(() => {
      navigate("/")
    }, 1000);

  };
  
  const getLocalContext = async (localId) => {
    try {
      const response = await apiServiceInstance.getLocalById(`/locals/${localId}`);
      if (!response) {
        throw new Error('No se pudieron obtener los detalles del local.');
      }
      const data = await response.json();
      setLocalData(data);
    } catch (error) {
      console.error('Error al obtener los detalles del local:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isProManager, getLocalContext, localData, setLocalData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
