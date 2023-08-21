import React from "react";
import "./LocalCard.css";

const LocalCard = ({ localInfo }) => {
    return (
        <>
        <div className="desktop">
          <div className="div">
            <div className="overlap-2">
              <div className="overlap-3">
                <div className="text-wrapper-5">TOP TODAY</div>
                <img className="star-svgrepo-com" src={localInfo.imgUrl} alt={localInfo.discoName} />
              </div>
              <div className="text-wrapper-6">{localInfo.discoName}</div>
              <p className="text-wrapper-7">Plaza del Ángel, 10 Madrid 28012</p>
              <p className="text-wrapper-8">Antón Martín (M: L1) o Sol (M: L1, L2, L3)</p>
              <div className="text-wrapper-9">Más información</div>
              <div className="text-wrapper-10">Desde: {localInfo.deals} €</div>
              <img className="group-3" alt="Group" src="group-563.png" />
              {/* <DollarSign className="icons-dollar-sign" /> */}
              <div className="div-wrapper">
                <div className="text-wrapper-11">RESERVAR</div>
              </div>
            </div>
          </div>
        </div>
        

        TODO 
        {/* NECESITO TRAER LA INFO DEL SERVIDOR AQUÍ/ESTO ESTÁ ENLAZADO CON LA LISTCARDS */}
    {/* <div className="box">
      <img className="local-image" src={localInfo.imgUrl} alt={localInfo.discoName} />
      <h2 className="local-name">{localInfo.discoName}</h2>
      <p className="local-deals">Deals: {localInfo.deals} €</p>
    </div> */}
    </>
    );
};

export default LocalCard;
