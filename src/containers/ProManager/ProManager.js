import React from 'react';
import owlBackground from '../../images/secondLogoOwl.png';
import './ProManager.css';
import MenuProManager from '../../components/MenuProManager/MenuProManager';

const ProManagerHome = () => {
  return (
    <div className="pro-manager-frame">
      <div className="background">
        <img className="second-owl-img" src={owlBackground} alt="Owl" />
      </div>
      <MenuProManager />
    </div>
  );
};

export default ProManagerHome;
