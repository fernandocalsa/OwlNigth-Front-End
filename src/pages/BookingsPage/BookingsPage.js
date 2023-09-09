import React, { useState } from 'react';
import { useAuth } from '../../components/AuthContext/AuthContext';
import { Link } from"react-router-dom"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingPage.css';

const BookingPage = ({ localInfo }) => {
  
  const { localData } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null); // Estado para almacenar la fecha seleccionada

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="booking-container">
      <h1 className="booking-title">Detalles del Local</h1>
      {localData ? (
        <div className="booking-details">
          <img
            src={localData.imgUrl}
            alt={`Foto de ${localData.discoName}`}
            className="booking-image"
          />
          <div className="booking-info"> 
            <p className="booking-info-item">
              <strong>Nombre del local:</strong> {localData.discoName}
            </p>
            <p className="booking-info-item">
              <strong>Ubicación:</strong> {localData.ubication}
            </p>
            {/* <p className="booking-info-item">
              <strong>Fecha:</strong> {localData.date}
            </p> */}
            {/* ROMPER EN SERVIDOR */}
            <div className="booking-info-item">
              <strong>Selecciona una fecha:</strong>
              <DatePicker
              className='data-picker'
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy" // Formato de fecha
                minDate={new Date()}
                isClearable
              />
            </div>
            <p className="booking-info-item">
              <strong>Promoción:</strong> {localData.promotion}
            </p>
            <p className="booking-info-item">
              <strong>Deals:</strong> {localData.deals}
            </p>
            <p className="booking-info-item">
              <strong>Hora:</strong> {localData.hour}
            </p>
          </div>
        </div>
      ) : (
        <Link to="/locals" className="back-link">
          <button className="back-button">Volver</button>
        </Link>
      )}
    </div>
    </>
  );
};

export default BookingPage;