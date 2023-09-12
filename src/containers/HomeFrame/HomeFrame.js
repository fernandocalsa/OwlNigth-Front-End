import React from "react";
import { Link } from "react-router-dom"
import beer from "./imgs/beer.png";
import disco from "./imgs/allNights.jpg";
import party from "./imgs/party.jpg";
import brides from "./imgs/brides.jpg";
import newTalents from "./imgs/newTalents.jpg";
import { Outline24Px } from "../../components/Outline24px/Outline24px";
import "./HomeFrame.css";

const Frame = () => {


    return (
        <>
            <div className="frame">
                <div className="rectangle">
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
                        <Link to="/party" className="hover-effect">
                            <div className="overlap-group" style={{ backgroundImage: `url(${party})` }}>
                                <div className="prepara-tu-fiesta">
                                    Prepara tu <br />
                                    fiesta perfecta
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="group-2">
                        <div className="text-wrapper-3">Despedidas</div>
                        <Link to="/brides" className="hover-effect">
                            <div className="overlap" style={{ backgroundImage: `url(${brides})` }}>
                                <div className="sorprende-a-la-novia">
                                    Sorprende
                                    <br />a la novia
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-3">Conciertos</div>
                        <Link to="/concerts" className="hover-effect">
                            <div className="overlap-2" style={{ backgroundImage: `url(${newTalents})` }}>
                                <div className="text-wrapper-4">Descubre nuevos talentos</div>
                            </div>
                        </Link>
                    </div>
                    <div className="group-4">
                        <div className="text-wrapper-5">¡NOVEDAD!</div>
                        <div className="div-2">
                            <Link to="/newspage" className="hover-effect">
                                <img className="img" alt="Rectangle" src={beer} />
                            </Link>
                            <p className="p">Fiesta de la Cerveza <br />
                                By Heineken</p>
                            <div className="rectangle-4" />
                            <div className="text-wrapper-8">AVAILABLE SOON</div>
                        </div>
                    </div>
                    <div className="group-5">
                        <div className="text-wrapper-6">All Nigths</div>
                        <div className="div-3">
                            <Link to="/locals" className="hover-effect">
                                <img className="img" alt="Rectangle" src={disco} />
                            </Link>
                            <p className="p1">Baila por las mejores discotecas de Madrid</p>
                            <div className="rectangle-3" />
                            <div className="text-wrapper-7">MAKE RESERVATION</div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frame;
