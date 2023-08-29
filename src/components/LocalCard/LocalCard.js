import React from "react";
import "./LocalCard.css";

const LocalCard = ({ localInfo }) => {
  
  return (
    <>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <img className="rectangle-2" alt={localInfo.id} src={localInfo.imgUrl} />
            <div className="rectangle-3" />
            <div className="text-wrapper-6">RESERVAR</div>
            <p className="element-entrada-antes-de">
              <span className="text-wrapper-7">{localInfo.deals}€ - </span>
              <span className="text-wrapper-8">Entrada antes de la 1:30H</span>
            </p>
            {/* <DollarSign className="icons-dollar-sign" /> */}
            <p className="refresco-cerveza-o"> (Refresco, cerveza o copa )</p>
            {/* <Edit className="icons-edit" /> */}
            <div className="rectangle-4" />
            <div className="text-wrapper-9">TOP TODAY</div>
            <div className="text-wrapper-10">{localInfo.discoName}</div>
            <p className="text-wrapper-11">Plaza del Ángel, 10 Madrid 28012</p>
            <p className="div-2">
              <span className="text-wrapper-12">Promotion includes: </span>
              <span className="text-wrapper-13">Entrada al recinto más una consumición.</span>
            </p>
            <p className="text-wrapper-14">Antón Martín (M: L1) o Sol (M: L1, L2, L3)</p>
          </div>
        </div>


      {/* {locals.map(local => (
        <div className="box">
          <img className="rectangle" alt="Rectangle" src={local.imgUrl} />
        </div>))} */}

      {/* <div className="overlap-wrapper">
          <div className="overlap-group-2">
            <img className="rectangle-2" alt="Rectangle" src="rectangle-1987.svg" />
            <p className="element-entrada-antes-de">
              <span className="text-wrapper-7">12€ - </span>
              <span className="text-wrapper-8">Entrada antes de la 1:30H</span>
            </p>
            <DollarSign className="icons-dollar-sign" />
            <p className="refresco-cerveza-o"> (Refresco, cerveza o copa )</p>
            <Edit className="icons-edit" />
            <div className="text-wrapper-10">Café Central</div>
            <p className="text-wrapper-11">Plaza del Ángel, 10 Madrid 28012</p>
            <p className="div-2">
              <span className="text-wrapper-12">Esta promoción incluye: </span>
              <span className="text-wrapper-13">Entrada al recinto más una consumición.</span>
            </p>
            <p className="text-wrapper-14">Antón Martín (M: L1) o Sol (M: L1, L2, L3)</p>
            <div className="text-wrapper-16">Más información</div>
            <img className="group-3" alt="Group" src="group-564.png" />
            <div className="rectangle-5" />
            <div className="text-wrapper-6">RESERVAR</div>
          </div>
        </div> */}
      {/* <div className="div-wrapper">
          <div className="overlap-group-2">
            <img className="rectangle-2" alt="Rectangle" src="image.svg" />
            <p className="element-entrada-antes-de">
              <span className="text-wrapper-7">12€ - </span>
              <span className="text-wrapper-8">Entrada antes de la 1:30H</span>
            </p>
            <DollarSign className="icons-dollar-sign" />
            <p className="refresco-cerveza-o"> (Refresco, cerveza o copa )</p>
            <Edit className="icons-edit" />
            <div className="text-wrapper-10">Café Central</div>
            <p className="text-wrapper-11">Plaza del Ángel, 10 Madrid 28012</p>
            <p className="div-2">
              <span className="text-wrapper-12">Esta promoción incluye: </span>
              <span className="text-wrapper-13">Entrada al recinto más una consumición.</span>
            </p>
            <p className="text-wrapper-14">Antón Martín (M: L1) o Sol (M: L1, L2, L3)</p>
            <div className="text-wrapper-16">Más información</div>
            <img className="group-3" alt="Group" src="image.png" />
            <div className="rectangle-5" />
            <div className="text-wrapper-6">RESERVAR</div>
          </div>
        </div> */}
      {/* <div className="group-4">
          <div className="overlap-group-2">
            <img className="rectangle-2" alt="Rectangle" src="rectangle-1987-2.svg" />
            <p className="element-entrada-antes-de">
              <span className="text-wrapper-7">12€ - </span>
              <span className="text-wrapper-8">Entrada antes de la 1:30H</span>
            </p>
            <DollarSign className="icons-dollar-sign" />
            <p className="refresco-cerveza-o"> (Refresco, cerveza o copa )</p>
            <Edit className="icons-edit" />
            <div className="text-wrapper-10">Café Central</div>
            <p className="text-wrapper-11">Plaza del Ángel, 10 Madrid 28012</p>
            <p className="div-2">
              <span className="text-wrapper-12">Esta promoción incluye: </span>
              <span className="text-wrapper-13">Entrada al recinto más una consumición.</span>
            </p>
            <p className="text-wrapper-14">Antón Martín (M: L1) o Sol (M: L1, L2, L3)</p>
            <div className="text-wrapper-16">Más información</div>
            <img className="group-3" alt="Group" src="group-564-2.png" />
            <div className="rectangle-5" />
            <div className="text-wrapper-6">RESERVAR</div>
          </div>
        </div>
        <div className="group-5">
          <div className="overlap-group-2">
            <img className="rectangle-2" alt="Rectangle" src="rectangle-1987-3.svg" />
            <p className="element-entrada-antes-de">
              <span className="text-wrapper-7">12€ - </span>
              <span className="text-wrapper-8">Entrada antes de la 1:30H</span>
            </p>
            <DollarSign className="icons-dollar-sign" />
            <p className="refresco-cerveza-o"> (Refresco, cerveza o copa )</p>
            <Edit className="icons-edit" />
            <div className="text-wrapper-10">Café Central</div>
            <p className="text-wrapper-11">Plaza del Ángel, 10 Madrid 28012</p>
            <p className="div-2">
              <span className="text-wrapper-12">Esta promoción incluye: </span>
              <span className="text-wrapper-13">Entrada al recinto más una consumición.</span>
            </p>
            <p className="text-wrapper-14">Antón Martín (M: L1) o Sol (M: L1, L2, L3)</p>
            <div className="text-wrapper-16">Más información</div>
            <img className="group-3" alt="Group" src="group-564-3.png" />
            <div className="rectangle-5" />
            <div className="text-wrapper-6">RESERVAR</div>
          </div>
        </div>
        <div className="group-6">
          <div className="overlap-group-2">
            <img className="rectangle-2" alt="Rectangle" src="rectangle-1992.svg" />
            <p className="element-entrada-antes-de">
              <span className="text-wrapper-7">12€ - </span>
              <span className="text-wrapper-8">Entrada antes de la 1:30H</span>
            </p>
            <DollarSign className="icons-dollar-sign" />
            <p className="refresco-cerveza-o"> (Refresco, cerveza o copa )</p>
            <Edit className="icons-edit" />
            <div className="rectangle-6" />
            <div className="text-wrapper-17">LAST CALL</div>
            <div className="text-wrapper-10">Café Central</div>
            <p className="text-wrapper-11">Plaza del Ángel, 10 Madrid 28012</p>
            <p className="div-2">
              <span className="text-wrapper-12">Esta promoción incluye: </span>
              <span className="text-wrapper-13">Entrada al recinto más una consumición.</span>
            </p>
            <p className="text-wrapper-14">Antón Martín (M: L1) o Sol (M: L1, L2, L3)</p>
            <div className="text-wrapper-18">Más información</div>
            <img className="group-3" alt="Group" src="group-565.png" />
            <div className="rectangle-7" />
            <div className="text-wrapper-19">RESERVAR</div>
          </div>
        </div> */}



      {/* TODO  */}
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
