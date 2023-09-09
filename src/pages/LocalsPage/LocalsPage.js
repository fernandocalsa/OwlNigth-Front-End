import React from "react";
import "./LocalsPage.css";
import deals from "./imgs/deals.jpg"
import { Link } from "react-router-dom";
import ListCards from "../../containers/ListCards/ListCards";
import { useAuth } from "../../components/AuthContext/AuthContext"

const Locals = () => {
  const { token, isProManager } = useAuth;

  //Crear boton editar para PATCH de locales

  // const [edit, setEdit] = useState(false);

  // const handleEdit = () => {

  // }

  return (
    <>
      {/* BANNER Y OFERTAS */}
      <div className="desktop">
        <div className="div">
          <div className="overlap">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={deals} />
              {/* Esta puede ser una img a la que tenga acceso el proManager solo? un apartado de imgs */}
              <div className="group">
              </div>
              <p className="element-OFF">
                <span className="span">20</span>
                <span className="text-wrapper-2">% </span>
                <span className="span">OFF</span>
              </p>
              <p className="p">Make your firs reservation and get</p>
              <div className="button-container">
              {token && isProManager && (// Verificar si el usuario está autenticado como ProManager
                  <div>
                    <Link to="/form">
                      <button className="add-local">Añadir Local</button>
                    </Link>
                    <button className="edit-local">Editar</button>
                  </div>
                )}
              </div>
            </div>
            <ListCards />
          </div>
          <div className="text-wrapper-5">All Nigths</div>
        </div>
      </div>
    </>
  )
}

export default Locals;