import React, { useState, useEffect } from "react";
import "./LocalCard.css";
import apiServiceInstance from "../../connect/apiService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";


const LocalCard = ({ localInfo }) => {
  const { token, setLocalData  } = useAuth();
  const navigate = useNavigate();

  const handleReservation = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.setItem("pendingLocalReservation", JSON.stringify(localInfo));
        navigate("/login&register");
      }else {
        const response = await apiServiceInstance.getLocalById(localInfo._id);
        console.log(response, "este es el Local");
        setLocalData(response); 
        // navigate(`/booking/${localInfo._id}`);
      }
    } catch (error) {
      console.error('Error al crear reserva:', error);
    }
  };

  return (
    <>
      <div className="overlap-group-wrapper">
        <div className="overlap-group-2">
          <img className="rectangle-2" alt={localInfo.id} src={localInfo.imgUrl} />
          <button className="rectangle-3">
            <div className="text-wrapper-6"
              onClick={handleReservation}
            >{token ? (
              <Link to={`/booking`}>RESERVAR</Link>
              // ?? este link?
            ) : (
              <Link to="/login&register">RESERVAR</Link>
            )}
            </div></button>
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
