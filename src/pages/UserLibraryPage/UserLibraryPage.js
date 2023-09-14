import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./UserLibraryPage.css"
import apiServiceInstance from '../../connect/apiService';
import { useAuth } from '../../connect/AuthContext/AuthContext';
import BookingCard from '../../components/BokingCards/BookingCards';

const UserLibraryPage = () => {

  const { getUserData, token, getUserBookings, user } = useAuth();
  const [bookingsSaved, setBookingsSaved] = useState([])

  const loadBookings = async () => {
    try {
      const response = await apiServiceInstance.getUserData();
      const userId = response._id;

      console.log(userId, 'este es el id');

      const bookings = await apiServiceInstance.getUserBookings(userId);

      console.log('Reservas del usuario:', bookings);

      setBookingsSaved(bookings);

      console.log(bookingsSaved, 'ESTO ES LO QUE ESTOY BUSCANDO');
    } catch (error) {
      console.error('Error al obtener los datos del usuario o las reservas:', error);
    }
  };

  useEffect(() => {
    if (token) {
      loadBookings();
    }
  }, [token]);

  return (
    <div className='principal-container'>
      <h1 className='my-bookings'>Mis reservas:</h1>
      <div className="booking-list">
        {Array.isArray(bookingsSaved) && bookingsSaved.length > 0 ? (
          bookingsSaved.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        ) : (
          <div className='back-login'>
            <p>Aún no tienes reservas.</p>
            <Link to="/locals"><button className='button-back-locals'>Volver</button></Link>
          </div>
        )}

      </div>
    </div>
  )
};
export default UserLibraryPage