import React, { useState } from 'react';
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
  // const [token, setToken] = useState('')
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      console.log(usersName, email, password, dni, age, "esto es lo que estoy viendo ahora");
      const response = await apiServiceInstance.registerUserNight(
        usersName,
        email,
        password,
        dni,
        age,
      );
      console.log(response, "este es el response del register");


      if (response.token) {
        localStorage.setItem('token', response.token);
        console.log("Token guardado en localStorage:", response.token);
      } else {
        console.error("La respuesta del servidor no contiene un token.");
        setErrorMessage('Inicio de sesión fallido después del registro.');
        return;
      };

      // Realizar el inicio de sesión inmediato después del registro exitoso
      const loginResponse = await apiServiceInstance.usersLogin(usersName, password);
      console.log(loginResponse, "este el es loginresponse");

      if (loginResponse) {
        // Inicio de sesión exitoso, redirigir al usuario a la página principal
        console.log(usersName, "este es el userName del login response");
        setTimeout(() => {
          // loading(true)
          navigate("/");
        }, 2000);
      } else {
        setErrorMessage('Inicio de sesión fallido después del registro.');
        console.log(setErrorMessage)
      }
    } catch (error) {
      console.error('Error en el registro o inicio de sesión:', error);
    }
  };

  return (
    <div className="register-form">
      <div className="form-wrapper">
        <label className="email">Email:</label>
        <input
          type="text"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-wrapper">
        <label className="username">Nombre:</label>
        <input
          type="text"
          className="input-field"
          value={usersName}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-wrapper">
        <label className="password">Contraseña:</label>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-wrapper">
        <label className="dni">DNI:</label>
        <input
          type="text"
          className="input-field"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </div>
      <div className="form-wrapper">
        <label className="age">Edad:</label>
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
      {/* {loading && <p>Cargando...</p>} */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default RegisterForm;