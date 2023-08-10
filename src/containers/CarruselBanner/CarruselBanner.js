import React from "react";
import Carrusel from '../../components/Carrusel/Carrusel'
import './CarruselBanner.css'
import foto1 from '../../images/foto1.png'
import banner from '../../images/banner1.png'

function CarrouselBanner() { //ESTE ES EL CARROUSEL PRINCIPAL
  const mockImagenes = [
    foto1,
    banner,
    
  ]

  return (
    <Carrusel images={mockImagenes} />
  );
}

export default CarrouselBanner;