import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardHeader, Image } from "@nextui-org/react";


const Locales = () => {
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
    <div>Reservas:</div>
      <div className="container">
        {locals.map((local, index) => (
          <Card key={index} className="col-span-12">
            <CardHeader className="absolute">
              <p>{local.discoName}</p>
              <h4 className="text-white">{local.deals}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Local"
              className="z-0 w-full h-full object-cover"
              TODO
              src={local.imageSrc} //guardar imagenes de los locales en la BD cloudinary
              style={{ maxWidth: "100%", borderRadius: "20px" }}
            />
          </Card>
        ))}
      </div>
      </>
    )
}

export default Locales;