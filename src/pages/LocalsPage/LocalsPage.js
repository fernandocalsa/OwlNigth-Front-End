import React, { useState, useEffect } from "react";
import "./LocalsPage.css";
import axios from "axios";
import Music from "../../components/LocalCard/imgs/electronicMusic.png";
import { Link } from "react-router-dom";
import { Card, CardHeader, Image } from "@nextui-org/react";

const Locals = () => {
  const [locals, setLocals] = useState([]);

  useEffect(() => {
    fetchLocals();
  }, []);

  const fetchLocals = async () => {
    try {
      const response = await axios.get("http://localhost:4000/locals");
      setLocals(response.data);
    } catch (error) {
      console.error("Error fetching locals:", error);
    }
  };
  return (
    <>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={Music}
        style={{ maxWidth: "80%", alignSelf:"center", maxHeight: "50%", opacity:"0.6" }} />
      <div>
        <Link to="/form">
          <button>Añadir Local</button>
        </Link>
        <button>Editar</button>
      </div>
      <div>Reservas:</div>
      <div className="container">
        {locals.map((local, index) => (
          <Card key={index} className="col-span-12">
            <CardHeader className="absolute">
              <p>{local.discoName}</p>
              <h4 className="text-white">{local.deals}</h4>
            </CardHeader>
            {/* <Image
              removeWrapper
              alt="Local"
              className="z-0 w-full h-full object-cover"
              TODO
              src={local.imgUrl} //guardar imagenes de los locales en la BD cloudinary
              style={{ maxWidth: "100%", borderRadius: "20px" }}
            /> */}
          </Card>
        ))}
      </div>
    </>
  )
}

export default Locals;