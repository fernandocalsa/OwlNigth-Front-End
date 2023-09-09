import LocalCard from "../../components/LocalCard/LocalCard";
import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const ListCards = () => {

  const [locals, setLocals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/locals');
      setLocals(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="frame">
      <div className="local-card-list">
      {locals.map((local) => (
        <LocalCard key={local.id} localInfo={local} />
      ))}
      </div>
    </div>
  );
};
export default ListCards;
