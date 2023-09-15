import React, { useState } from 'react';
import axios from 'axios';
import apiServiceInstance from '../../connect/apiService';
import "./RegisterForm.css"
import { useNavigate } from "react-router-dom"

const RegisterForm = () => {
  const [usersName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkUsernameAvailability = async (username) => {
    try {
      const response = await axios.get(`/api/check-username?username=${username}`);
      if (response.data.exists) {
        setErrorMessage('Este usuario ya existe. Por favor, elige otro nombre de usuario.');
      } else {
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error al verificar el nombre de usuario:', error);
    }
  };
  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

    if (newUsername) {
      checkUsernameAvailability(newUsername);
    }
  };

  const handleRegister = async () => {
    if (!usersName || !email || !password || !dni || !age) {
      setErrorMessage('Credenciales inválidas. Por favor, completa los campos correctamente.');
      console.log(errorMessage, "este es el error mensaje")
      return;
    }
    try {
      console.log(usersName, email, password, dni, age, "esto es lo que estoy viendo ahora");
      const response = await apiServiceInstance.registerUserNight(
        usersName,
        email,
        password,
        dni,
        age,
      );

      if (response.token) {
        localStorage.setItem('token', response.token);
        console.log("Token guardado en localStorage:", response.token);
      } else {
        console.error("La respuesta del servidor no contiene un token.");
        setErrorMessage('Inicio de sesión fallido después del registro.');
        return;
      };

      const loginResponse = await apiServiceInstance.usersLogin(usersName, password);
      console.log(loginResponse, "este el es loginresponse");

      if (loginResponse) {
        console.log(usersName, "este es el userName del login response");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setErrorMessage('Inicio de sesión fallido después del registro.');
        console.log(setErrorMessage)
      }
    } catch (error) {
      console.error('Error en el registro o inicio de sesión:', error);
    }
  };

  return (
    <div className="register-form-container">
      <div className="form-wrapper">
        <label className="label-inputs-register">Email:</label>
        <input
          type="text"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-wrapper">
        <label className="label-inputs-register">Nombre:</label>
        <input
          type="text"
          className="input-field"
          value={usersName}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-wrapper">
        <label className="label-inputs-register">Contraseña:</label>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-wrapper">
        <label className="label-inputs-register">DNI:</label>
        <input
          type="text"
          className="input-field"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </div>
      <div className="form-wrapper">
        <label className="label-inputs-register">Edad:</label>
        <input
          type="text"
          className="input-field"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type="button" className="button-wrapper" onClick={handleRegister}>
        Registrarse
      </button>
      <div><p className="error-message">{errorMessage}</p></div>
    </div>
  );
};

export default RegisterForm;