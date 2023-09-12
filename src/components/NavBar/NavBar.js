import logo from '../../images/logoOwl.png'
import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../connect/AuthContext/AuthContext';

function NavBar() {
    const { token, user, userName } = useAuth();

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
                    {token ? (
                        <>
                            <li>
                                <Link className='bookings' to='/library'>
                                    Reservas
                                </Link>
                            </li>
                            <li className='mi-perfil'>
                                {token && userName.profilePath ? (
                                    <Link to={userName.profilePath}>{userName}</Link>
                                ) : (
                                    <Link to="/user-profile">Mi Perfil</Link>
                                )}
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link className='login' to='/login&register'>
                                Iniciar Sesión
                            </Link>
                        </li>
                    )}

                </ul>
            </div>
        </>
    );
}

export default NavBar;