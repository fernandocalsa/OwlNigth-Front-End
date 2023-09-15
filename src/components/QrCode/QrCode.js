import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRPage = ({ userData, onDeleteBooking, bookingId }) => {
    const [isScanned, setIsScanned] = useState(false);

    const generateQRContent = (userData) => {
        const contentObject = {
            // Name: userData.usersName,
            //   Email: userData.email,
            // Dni: userData.dni,
            // Age: userData.age,
            // Img: userData.avatarImg,
            // ReservaAprobada: userData.reservas,
            RedirectURL: 'https://media.tenor.com/lb5IqGp_7EMAAAAC/trollfacelmaaaao.gif',
        };
        console.log(contentObject, "esto es el userData en el qr");

        return JSON.stringify(contentObject);
    };

    const handleQRCodeScan = async () => {
        try {
            await onDeleteBooking(bookingId);
            setIsScanned(true);
            window.location.reload();
        } catch (error) {
            console.error('Error al eliminar la reserva:', error);
        }
    };
    return (
        <div className="qr-page">
            {userData ? (
                <>
                    <QRCode value={generateQRContent(userData)} />
                    {!isScanned && (
                        <button onClick={handleQRCodeScan}>Escanear QR</button>
                    )}
                </>
            ) : (
                <p>No se ha cargado la información del usuario.</p>
            )}
        </div>
    );
};

export default QRPage;
