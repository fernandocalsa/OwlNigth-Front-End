import React, { useState, useEffect } from 'react';
import owl from '../../images/logoOwl.png'
import './Login&RegisterForm.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../components/AuthContext/AuthContext"
import apiServiceInstance from '../../connect/apiService';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { sessionExpired, setSessionStartTime } from '../../utils/sessionExpired';

const LoginAndRegister = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [title, setTitle] = useState('Iniciar Sesión');
  const { token, login } = useAuth();
  const navigate = useNavigate()

  const handleLogin = async (usersName, password) => {
    console.log(usersName, "este es el userName");
    console.log(password, "este es el password");

    try {
      const response = await apiServiceInstance.usersLogin(usersName, password);
      console.log(response, "este es el response de login");

      if (response.data && response.data.token) {
        console.log(response.data, "este es el response.data");
        console.log(response.data.token, "este es el response.data.token");
        login(response.data.token);
        const pendingLocalReservation = JSON.parse(localStorage.getItem("pendingLocalReservation"));
        if (pendingLocalReservation) {
          localStorage.removeItem("pendingLocalReservation"); // Elimina el local pendiente después de usarlo.
          navigate(`/local/${pendingLocalReservation.id}`);
        } else {
          navigate("/");
        }
      }

      if (typeof token === 'string' && token.trim() !== '') {
        setSessionStartTime();
        login(token);
        navigate("/");

      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };

  const handleShowRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setTitle(showRegisterForm ? 'Iniciar Sesión' : 'Registro');
  };

  useEffect(() => {
    if (token) {
      const sessionTimeout = 60 * 60 * 1000;
      sessionExpired(sessionTimeout, () => {
        navigate('/');
      });
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <>
      <Link to="/">
        <button className="close-button">X</button>
      </Link>
      <div className="loginFrame">
        <div className="owlBackground">
          <img className="owlImg" alt="Group" src={owl} />
        </div>
        <div className="formContainer">
          <div className="loginOverlap">
            <div className="loginOverlap-group">
              <h1 className="text-init">{title}</h1>
            </div>
          </div>
          {showRegisterForm ? (
            <RegisterForm />
          ) : (
            <LoginForm
              onLogin={(errorMessage) => console.log(errorMessage)}
              handleLogin={handleLogin}
            />
          )}
          <h6 className="register-link" onClick={handleShowRegisterForm}>
            {showRegisterForm ? 'Iniciar Sesión' : 'Aún no te has registrado?'}
          </h6>
        </div>
      </div>
    </>
  );
};
export default LoginAndRegister;