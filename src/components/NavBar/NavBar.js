import logo from '../../images/logoOwl.png'
import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

function NavBar() {
    const {token} =  useAuth();

    return (
        <>
            <div className='div'>
                <ul className='menu'>
                    <li className='logo-container'>
                        <a href='/'>
                            <img className='logo' src={logo} alt='logo'></img>
                            <h1 className='name'>OwlNight</h1>
                        </a>
                    </li>
                    <li><a className='bookings' href='/library'>Reservas</a></li>
                    <li><a className='login' href='/login&register'>
                        {token ? (
                            // Mostrar el perfil del usuario si está autenticado
                            <div>
                                <Link to="/user-profile">Mi Perfil</Link>
                            </div>
                        ) : (
                            // Mostrar el enlace de inicio de sesión si no está autenticado
                            <Link to="/login&register">Iniciar Sesión</Link>
                        )}
                    </a></li>

                </ul>
            </div>
        </>
    );
}

export default NavBar;