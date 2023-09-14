import logo from '../../images/logoOwl.png'
import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../connect/AuthContext/AuthContext';

function NavBar() {
    const { token, isProManager, userName, logout } = useAuth();

    return (
        <>
            <div className='div'>
                <ul className='menu'>
                    <li className='logo-container'>
                        {isProManager() ? (<Link to='/pro-manager-home'>
                            <img className='logo' src={logo} alt='logo'></img>
                            <h1 className='name'>OwlNight</h1>
                        </Link>) : (<Link to='/'>
                            <img className='logo' src={logo} alt='logo'></img>
                            <h1 className='name'>OwlNight</h1></Link>)}
                    </li>
                    {token ? (
                        <>{isProManager() ? (
                            <>
                                <li>
                                    <Link className='add-local-promanager' to='/form'>
                                        Añadir Local
                                    </Link>
                                </li>
                                <li>
                                    <Link className='logout-promanager' onClick={logout}>
                                        Cerrar Sesión
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='bookings'>
                                    <Link to='/library'>Reservas</Link>
                                </li>
                                <li className='mi-perfil'>
                                    {userName.profilePath ? (
                                        <Link to={userName.profilePath}>{userName}</Link>
                                    ) : (
                                        <Link to="/user-profile" className='my-profile-menu'>Mi Perfil</Link>
                                    )}
                                </li>
                            </>
                        )}
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