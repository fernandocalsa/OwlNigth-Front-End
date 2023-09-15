import React, { useState, useEffect } from 'react';
import apiServiceInstance from '../../connect/apiService';
import './BookingCards.css';
import QRPage from '../../components/QrCode/QrCode';

const BookingCard = ({ booking }) => {

    const [localData, setLocalData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchLocalData = async () => {
            try {
                const localInfo = await apiServiceInstance.getLocalById(booking.localId);
                setLocalData(localInfo);
            } catch (error) {
                console.error('Error al obtener los datos del local:', error);
            }
        };

        const fetchUserData = async () => {
            try {
                const userData = await apiServiceInstance.getUserData();
                setUserData(userData);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };

        if (booking.localId) {
            fetchLocalData();
            fetchUserData();
        }
    }, [booking.localId]);

    const deleteBookingById = async (bookingId) => {
        try {
            const response = await apiServiceInstance.deleteBookingById(bookingId);
            if (response) {
            } else {
                console.error('Error al eliminar la reserva');
            }
        } catch (error) {
            console.error('Error al eliminar la reserva:', error);
        }
    };

    return (
        <div className="booking-card-component">
            <div className="booking-img">
                <div className='local-img'>
                    {localData ? (
                        <div className='image-container'>
                            <img src={localData.imgUrl} alt="Imagen del local" className="local-image" />
                        </div>
                    ) : (
                        <p>Cargando información del local...</p>
                    )}
                </div>
            </div>
            <div className="local-details">
                <div className='div'>
                    <h3 className='booking-init'>Reserva</h3>
                </div>
                <div className='text-wrapper-3-dates'>
                    <p className='local-data'>Fecha:</p>
                    <p className='text-data-info'> {booking.dates.join(', ')}</p>
                </div>
                <div className="text-wrapper-4-name">
                    <p className='local-data'>Nombre del local:</p>
                </div>
                <div className='text-data-info'>{localData?.discoName}</div>
                <div>
                    <p className='local-data'>Ubicación: </p>
                    <p className='text-data-info'> {localData?.ubication}</p>
                </div>
                <div>
                    <p className='local-data'>Hora:</p>
                    <p className='text-data-info'> {localData?.hour}</p>
                </div>
            </div>
            <div className="qr-code">
                {userData ? (
                    <QRPage userData={userData} onDeleteBooking={() => deleteBookingById(booking._id)} bookingId={booking._id} />
                ) : (
                    <p>Cargando información del usuario...</p>
                )}
                <div className="qr-text">Escanea el QR</div>
            </div>
        </div>
    );
}

export default BookingCard;


