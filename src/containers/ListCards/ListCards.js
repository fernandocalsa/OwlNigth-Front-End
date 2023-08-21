import React, { useState, useEffect } from "react";
import axios from "axios";
import LocalCard from "../../components/LocalCard/LocalCard";

const ListCards = () => {
  const [locals, setLocals] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener la lista de locales
    axios.get("http://localhost:4000/locals")
      .then((response) => {
        setLocals(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de locales:", error);
      });
  }, []);

  return (
    <div className="locals-list">
      {locals.map((local) => (
        <LocalCard key={local._id} localInfo={local} />
      ))}
    </div>
  );
};

export default ListCards;
