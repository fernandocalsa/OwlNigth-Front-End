import React, { useState } from "react";
import "./LocalCard.css";
import { Link, useNavigate } from "react-router-dom";

const LocalCard = ({ localInfo }) => {


   
//PONER FUNCIÓN PARA LA RESERVA DE LOS LOCALES

  // const [isLogin, setIsLogin] = useState(false);
  // const navigate = useNavigate()

  // const handleClick = () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token,  "este es el token del usuario");
  //   if (token) {
  //     setIsLogin(true);
  //     navigate("/reservas");


  //   } else {
  //     setIsLogin(false);
  //     navigate("/login&register");
  //   }
  // }

  return (
    <>
      <div className="overlap-group-wrapper">
        <div className="overlap-group-2">
          <img className="rectangle-2" alt={localInfo.id} src={localInfo.imgUrl} />
          <div className="rectangle-3" />
          <div className="text-wrapper-6"
          // onClick={handleClick}
          >RESERVAR
            {/* <Link to="/reservas">
            {isLogin ? "RESERVAR" : "RESERVAR"}
            </Link> */}
          </div>
          <p className="element-entrada-antes-de">
            <span className="text-wrapper-7">{localInfo.deals}€ - </span>
            <span className="text-wrapper-8">{localInfo.hour}</span>
          </p>
          <p className="refresco-cerveza-o"> (Refresco, cerveza o copa )</p>
          <div className="rectangle-4" />
          <div className="text-wrapper-9">TOP TODAY</div>
          <div className="text-wrapper-10">{localInfo.discoName}</div>
          <p className="text-wrapper-11">{localInfo.ubication}</p>
          <p className="div-2">
            <span className="text-wrapper-12">Promotion includes: </span>
            <span className="text-wrapper-13">{localInfo.promotion}</span>
          </p>
          <p className="text-wrapper-14">{localInfo.date}</p>
        </div>
      </div>
    </>
  );
};

export default LocalCard;
