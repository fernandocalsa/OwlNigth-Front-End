import React, { useState, useEffect } from "react";
import "./LocalsPage.css";
import banner from "./imgs/banner.jpg"
import axios from "axios";
import { Link } from "react-router-dom";
import ListCards from "../../containers/ListCards/ListCards";

const Locals = () => {
  const [locals, setLocals] = useState([]);

  useEffect(() => {
    fetchLocals();
  }, [locals]);

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
      <div className="container">
        <div className="desktop">
          <div className="div">
            <div className="overlap">
              <div className="overlap-group">
                <img className="rectangle" alt="Rectangle" src={banner} />
                {/* <IconArrowRightThemeDark className="outline" color="white" /> */}
                <div className="group">
                  <img className="img" alt="Group" src="group-12.png" />
                </div>
                <div className="text-wrapper">OwlNigth</div>
                <p className="element-OFF">
                  <span className="span">20</span>
                  <span className="text-wrapper-2">% </span>
                  <span className="span">OFF</span>
                </p>
                <p className="p">Make your first reservation and get</p>
                <div className="group-2">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                </div>
              </div>
            </div>
            <div className="text-wrapper-12">All Nigths</div>
            <ListCards />

            <div>
              <Link to="/form">
                <button className="add-local">Añadir Local</button>
              </Link>
              <button className="edit-local">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Locals;