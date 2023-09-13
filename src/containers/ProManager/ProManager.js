import React from 'react';
import owlBackground from '../../images/logoOwl.png';
import './ProManager.css';

const ProManagerHome = () => {
  return (
    <div className="pro-manager-frame">
      <div className="owl-background">
        <img className="owl-img" src={owlBackground} alt="Owl" />
      </div>
      <div className="menu-container">
        <h1 className="menu-title">Menú del ProManager</h1>
        <ul className="menu-list">
          <li className="menu-item">
            <button className="menu-button">Locales</button>
          </li>
          <li className="menu-item">
            <button className="menu-button">Usuarios</button>
          </li>
          {/* Agrega más elementos del menú aquí */}
        </ul>
      </div>
    </div>
  );
};

export default ProManagerHome;
