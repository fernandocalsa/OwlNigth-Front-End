import React, { useState } from 'react';
import apiServiceInstance from '../../connect/apiService';
import { useAuth } from "../../connect/AuthContext/AuthContext"

const LoginForm = ({ onLogin }) => {
  const [usersName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const { success, token, errorMessage } = await apiServiceInstance.usersLogin(
        usersName,
        password
      );
      if (success) {
        login(token);
      } else {
        console.error('Error de autenticación:', errorMessage);
        onLogin(errorMessage);
      }
    } catch (error) {
      console.error('Error de autenticación:', error);
    }
  };

  return (
    <form>
      <div className="form-wrapper">
        <label className="email">Usuario:</label>
        <input
          type="text"
          className='input-field'
          value={usersName}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-wrapper2">
        <label className="password">Contraseña:</label>
        <input
          type="password"
          className='input-field'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="button" className="button-wrapper" onClick={handleLogin}>
        Log in
      </button>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
    </form>
  );
};

export default LoginForm;
