import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiServiceInstance from '../apiService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(false);
  const [datesFromAddLocal, setDatesFromAddLocal] = useState([]);


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

  const userName = async (data) => {
    try {
      const response = await apiServiceInstance.getUserData(`/usersNight/me`);
      if (!response) {
        throw new Error('No se pudieron obtener los detalles del usuario.');
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error al obtener el nombre del usuario:', error);
    }
  };

  const login = (newToken, userData) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    console.log("Hasta luego!");
    setTimeout(() => {
      navigate("/")
    }, 1000);
    if(!token){
      navigate("/");
      console.log("La sesion ha expirado")
    }
  };

  const getDatesFromAddLocal = async () => {
    try {
      const response = await apiServiceInstance.addLocal();
      console.log(response.data, "AQUÍ TIENE QUE ESTAR LA FECHAAA!!!!");
      if (response) {
        const dates = await response.json();
        setDatesFromAddLocal(dates);
        console.log('Fechas obtenidas desde addLocal:', dates);
      }
    } catch (error) {
      console.error('Error al obtener fechas desde addLocal:', error);
    }
  };

  const getUserBookings = async (userId) => {
    try {
      const response = await apiServiceInstance.getUserBookings(userId);
      return response;
    } catch (error) {
      console.error('Error al obtener las reservas del usuario:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      token, login, logout, isProManager,
      user, userName, getDatesFromAddLocal, datesFromAddLocal, getUserBookings
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
