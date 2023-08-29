import React, { useState } from 'react';
import axios from 'axios';
import owl from '../../images/logoOwl.png'
import './Login&Register.css'

const LoginAndRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });
      // Manejar la respuesta del backend, por ejemplo, almacenar el token en el estado o en localStorage
    } catch (error) {
      // Manejar errores
    }
  };

  return (
    <div className="loginFrame">
      <div className="owlBackground">
        <img className="owlImg" alt="Group" src={owl} />
      </div>

      <div className="formContainer">
        <div className="loginOverlap">
          <div className="loginOverlap-group">
            <h1 className="text-init">Iniciar Sesión</h1>
          </div>
          </div>
       
        <form>
          <div className="form-wrapper">
            <label className="email">Email:</label>
            <input
              type="text"
              className='input-field'
              value={username}
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
        </form>
      </div>
    </div>
  );
};
export default LoginAndRegister;