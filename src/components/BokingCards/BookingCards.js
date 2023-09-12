import React, { useState, useEffect } from 'react';
import apiServiceInstance from '../../connect/apiService';
import './BookingCards.css';
import QRPage from '../../components/QrCode/QrCode';

const BookingCard = ({ booking }) => {

    const [localData, setLocalData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [qrCodeContent, setQRCodeContent] = useState(null);

    useEffect(() => {
        const fetchLocalData = async () => {
            try {
                const localInfo = await apiServiceInstance.getLocalById(booking.localId);
                setLocalData(localInfo);
                console.log(localData, " esta es la info pa imprimir")
            } catch (error) {
                console.error('Error al obtener los datos del local:', error);
            }
        };
        const fetchUserData = async () => {
            try {
                const userData = await apiServiceInstance.getUserData();
                setUserData(userData);
                console.log(userData, "esta es la info del usuario que va en el qr");
                const contentObject = {
                    userId: userData.userId,
                    userName: userData.userName,
                };
                setQRCodeContent(JSON.stringify(contentObject));
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };

        if (booking.localId) {
            fetchLocalData();
            fetchUserData();
        }
    }, [booking.localId]);

    const changeFormatDate = () => {//recorte de fecha para poder mostrarla en el formato que quiero
        if (localData && localData.availableDates) {
            const completeDate = localData.availableDates;
            const separateDate = completeDate.split('T');
            const dateIWant = separateDate[0];
            return dateIWant;
        }
        return '';
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
                    <QRPage userData={userData} />
                ) : (
                    <p>Cargando información del usuario...</p>
                )}
                <div className="qr-text">Escanea el QR</div>

            </div>
        </div>
    );
}

export default BookingCard;


