import React from "react";
import beer from "./imgs/beer.png";
import disco from "./imgs/allNights.jpg";
import { Outline24Px } from "../../components/Outline24px/Outline24px";
import "./FigmaPage.css";

const Frame = () => {
    return (
        <>
            <div className="frame">
                <div className="rectangle" />
                <div className="group">
                    <p className="here-we-have-the">
                        <span className="text-wrapper">
                            Here we have the best plans to
                            <br />
                            do in{" "}
                        </span>
                        <span className="span">Madrid</span>
                    </p>
                    <Outline24Px className="outline" color="#CCF2FE" />
                </div>
                <div className="div">
                    <div className="text-wrapper-2">Your own Party</div>
                    <div className="overlap-group">
                        <div className="prepara-tu-fiesta">
                            Prepara tu <br />
                            fiesta perfecta
                        </div>
                    </div>
                </div>
                <div className="group-2">
                    <div className="text-wrapper-3">Despedidas</div>
                    <div className="overlap">
                        <div className="sorprende-a-la-novia">
                            Sorprende
                            <br />a la novia
                        </div>
                    </div>
                </div>
                <div className="group-3">
                    <div className="text-wrapper-3">Conciertos</div>
                    <div className="overlap-2">
                        <div className="text-wrapper-4">Descubre nuevos talentos</div>
                    </div>
                </div>
                <div className="group-4">
                    <div className="text-wrapper-5">¡NOVEDAD!</div>
                    <div className="div-2">
                        <img className="img" alt="Rectangle" src={beer} />
                        {/* <img className="fiesta-de-la-cerveza" alt="Fiesta de la cerveza" src="fiesta-de-la-cerveza-by-heineken.png" />
                        <img className="rectangle-2" alt="Rectangle" src="rectangle-1972.png" /> */}
                        <img className="AVAILABLE-SOON" alt="Available SOON" src="AVAILABLE-SOON.png" />
                        <p className="p">Fiesta de la Cerveza <br />
                         By Heineken</p>
                        <div className="rectangle-4" />
                        <div className="text-wrapper-8">AVAILABLE SOON</div>
                    </div>
                </div>
                <div className="group-5">
                    <div className="text-wrapper-6">All Nigths</div>
                    <div className="div-3">
                        <img className="img" alt="Rectangle" src={disco} />
                        <p className="p1">Baila por las mejores discotecas de Madrid</p>
                        <div className="rectangle-3" />
                        <div className="text-wrapper-7">MAKE RESERVATION</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frame;
