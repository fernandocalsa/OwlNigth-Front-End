import React from "react";
import "./BoxHome.css";
import beer from "../../components/imgs/beer.jpg"

export const Box = () => {
  return (
    <div className="box">
      <img className="rectangle" alt="Rectangle" src="rectangle-1970.png" />
      <img className="vector-stroke" alt="Vector stroke" src="vector-stroke.svg" />
      <div className="prepara-tu-fiesta">
        <p>PRUEBASSS</p>
        <img src={beer} alt="pruebas 1" />
      </div>
    </div>
  );
};
