import React, { useState, useEffect } from "react";
import "./LocalCard.css";
import apiServiceInstance from "../../connect/apiService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../connect/AuthContext/AuthContext";
import { DateProvider, useDateContext } from "../DateContext/DateContext";


const LocalCard = ({ localInfo }) => {
  const { token, setLocalData } = useAuth();
  const { availableDates } = useDateContext();
  const navigate = useNavigate();

  const handleReservation = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.setItem("pendingLocalReservation", JSON.stringify(localInfo));
        navigate("/login&register");
      } else {
        const response = await apiServiceInstance.getLocalById(localInfo._id);
        console.log(response, "este es el Local");
        setLocalData(response);
        // navigate(`/booking/${localInfo._id}`);
      }
    } catch (error) {
      console.error('Error al crear reserva:', error);
    }
  };

  console.log(localInfo.categories, "estas son las categorías");
  console.log(localInfo.availableDates, "estas son las fechas");

  // const changeFormatDate = () => { //recorte de fecha para poder mostrarla en el formato que quiero
  //   if (localInfo && localInfo.availableDates) {
  //     const completeDate = localInfo.availableDates;
  //     const separateDate = completeDate.split('T');
  //     const dateIWant = separateDate[0];
  //     return dateIWant;
  //   }
  //   return '';
  // };

  return (
    <>
      <div className="overlap-group-wrapper">
        <div className="overlap-group-2">
          <img className="rectangle-2" alt={localInfo.id} src={localInfo.imgUrl} />
          <button className="rectangle-3">
            <div className="text-wrapper-6"
              onClick={handleReservation}
            >{token ? (
              <Link to={`/booking/${localInfo._id}`}>RESERVAR</Link>
              // ?? este link?
            ) : (
              <Link to="/login&register">RESERVAR</Link>
            )}
            </div></button>
          <p className="element-entrada-antes-de">
            <p className="local-category">Categorías: {localInfo.categories}</p>
            <span className="local-deals">{localInfo.deals}€ - </span>
            <span className="local-hour">{localInfo.hour}</span>
          </p>
          <p className="refresco-cerveza-o"> (Refresco, cerveza, copa, etc )</p>
          {/* <div className="rectangle-4" />
          <div className="text-wrapper-9">TOP TODAY</div>  */}
          {/* filtro de si el local está en la categoría 'novedad' poner en el top today */}

          <div className="text-wrapper-10">{localInfo.discoName}</div>
          <p className="text-wrapper-11">{localInfo.ubication}</p>
          <p className="div-2">
            <span className="text-wrapper-12">Oferta: </span>
            <span className="text-wrapper-13">{localInfo.promotion}</span>
          </p>
          <p className="local-available-dates">
            Fechas disponibles: {availableDates}
          </p>

        </div>
      </div>
    </>
  );
};

export default LocalCard;
