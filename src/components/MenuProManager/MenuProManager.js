import React from 'react';
import './MenuProManager.css';
import { Link } from 'react-router-dom'

const MenuProManager = () => {
    return (
        <div className="menu-container-pro">
            <h1 className="menu-title-pro">Menú del ProManager</h1>
            <ul className="menu-list-pro">
                <li className="menu-item-pro">
                    <Link to='/locals'>
                        <button className="menu-button-pro">Locales</button> 
                        {/* // hacer la lógica de que si es pro manager solo me muestre las cards */}
                    </Link>
                </li>
                <li className="menu-item-pro">
                    <button className="menu-button-pro">Usuarios</button>
                </li>
            </ul>
        </div>
    );
};

export default MenuProManager;
