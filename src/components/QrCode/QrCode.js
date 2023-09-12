import React from 'react';
import QRCode from 'qrcode.react';

const QRPage = ({ userData }) => {
    const generateQRContent = (userData) => {
        const contentObject = {
            Name: userData.usersName,
            //   Email: userData.email,
            Dni: userData.dni,
            Age: userData.age,
            Img: userData.avatarImg,
            ReservaAprobada: userData.reservas,
            RedirectURL: 'https://media.tenor.com/lb5IqGp_7EMAAAAC/trollfacelmaaaao.gif', //cuando suba la página a internet podría editar la info del qr
        };
        console.log(contentObject, "esto es el userData en el qr");

        return JSON.stringify(contentObject);
    };

    return (
        <div className="qr-page">
            {userData ? (
                <QRCode value={generateQRContent(userData)} />
            ) : (
                <p>No se ha cargado la información del usuario.</p>
            )}
        </div>
    );
};

export default QRPage;
