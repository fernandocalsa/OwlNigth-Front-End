import React from "react";
import "./LocalCard.css"
import beer from "./imgs/beer.jpg"
import despedida from "./imgs/despedida.jpg"
import Disco from "./imgs/discotecaCerrada.png"
import Music from "./imgs/electronicMusic.png"
import balloon from "./imgs/balloon.jpg"
import bass from "./imgs/bass.jpg"
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function LocalCard() {
  return (
    <>
      <div className="container">
        <div className="card-group">
          <Card className="col-span-12">
            <CardHeader className="card-header">
              <p className="text-tiny text-white/60 uppercase font-bold">Celebraciones</p>
              <h4 className="text-white font-medium text-large">Monta la fiesta del año</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={balloon}
              style={{ maxWidth: "100%", borderRadius: "20px" }}
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Conciertos de Autor</p>
              <h4 className="text-white font-medium text-large">Descubre nuevos Talentos</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={bass}
              style={{ maxWidth: "100%", borderRadius: "20px" }}
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Despedidas</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={despedida}
              style={{ maxWidth: "90%", borderRadius: "20px" }} />
            <h4 className="text-white font-medium text-large">La fiesta que toda novia quiere</h4>
          </Card>
        </div>
        <div className="footer">
          <Card isFooterBlurred className="footer-card">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Novedad!</p>
              <h4 className="text-black font-medium text-2xl">Fiesta de la cerveza</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={beer}
              style={{ maxWidth: "70%", maxHeight: "100%", borderRadius: "20px" }} />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                {/* <p className="text-black text-tiny">Get notified.</p> */}
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">El Día a Día</p>
              <h4 className="text-white/90 font-medium text-xl">Discotecas</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src={Music}
              style={{ maxWidth: "35%", maxHeight: "50%", borderRadius: "20px" }} />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <img
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src={Disco}
                  style={{ maxWidth: "35%", borderRadius: "20px" }} />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Apúntate a las listas de las mejores discotecas de Madrid</p>
                  {/* <p className="text-tiny text-white/60">Get a good night's sleep.</p> */}
                </div>
              </div>
              <Button radius="full" size="sm">Reservar</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
