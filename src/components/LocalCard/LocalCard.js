import React, { useState, useEffect } from "react";
import "./LocalCard.css";
import apiServiceInstance from "../../connect/apiService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../connect/AuthContext/AuthContext";
import { DateProvider, useDateContext } from "../DateContext/DateContext";


const LocalCard = ({ localInfo }) => {
  const { token, setLocalData, isProManager } = useAuth();
  const { availableDates } = useDateContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedFields, setEditedFields] = useState({});
  const [newLocalInfo, setNewLocalInfo] = useState(localInfo)
  const navigate = useNavigate();

  const handleReservation = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.setItem("pendingLocalReservation", JSON.stringify(localInfo));
        navigate("/login&register");
      } else {
        const response = await apiServiceInstance.getLocalById(localInfo._id);
        console.log(response, "este es el Local");
        setLocalData(response);
      }
    } catch (error) {
      console.error('Error al crear reserva:', error);
    }
  };

  //LÓGICA PARA LA EDICIÓN DE PROMANAGER
  const handleEdit = () => {
    setIsEditing(true);
    setEditedFields(newLocalInfo);
    console.log(newLocalInfo, "esto es el eddiiiit")
  };

  const handleSave = async () => {
    try {
      if (isEditing) {
        await apiServiceInstance.updateLocals(newLocalInfo._id, editedFields);
        setIsEditing(false);
        const updatedLocal = await apiServiceInstance.getLocalById(newLocalInfo._id);
        setNewLocalInfo(updatedLocal);
        console.log(updatedLocal, "este es el saveee");
      }
    } catch (error) {
      console.error("Error al guardar cambios:", error);
    }
  };

  // const changeFormatDate = () => { //recorte de fecha para poder mostrarla en el formato que quiero
  //   if (localInfo && localInfo.availableDates) {
  //     const completeDate = localInfo.availableDates;
  //     const separateDate = completeDate.split('T');
  //     const dateIWant = separateDate[0];
  //     return dateIWant;
  //   }
  //   return '';
  // };

  return (
    <>
      <div className="overlap-group-wrapper">
        <div className="overlap-group-2">
          <img className="rectangle-2" alt={localInfo.id} src={localInfo.imgUrl} />
          {isEditing ? (
            <div className="edit-fields">
              {/* Campo para editar el nombre del local */}
              <input
                type="text"
                className="edit-input-text"
                value={editedFields.discoName}
                onChange={(e) =>
                  setEditedFields({ ...editedFields, discoName: e.target.value })
                }
              />
              <input
                type="text"
                className="edit-input-text"
                value={editedFields.ubication}
                onChange={(e) =>
                  setEditedFields({ ...editedFields, ubication: e.target.value })
                }
              />
              <input
                type="text"
                className="edit-input-text"
                value={editedFields.promotion}
                onChange={(e) =>
                  setEditedFields({ ...editedFields, promotion: e.target.value })
                }
              />
              <input
                type="text"
                className="edit-input-text"
                value={editedFields.availableDates}
                onChange={(e) =>
                  setEditedFields({ ...editedFields, availableDates: e.target.value })
                }
              />
            </div>
          ) : (
            // Contenido normal de la card

            <div>
              {/* <div className="text-wrapper-10">
              {editedFields ? newLocalInfo.discoName : localInfo.discoName}
            </div> */}
              <div className="text-wrapper-10">
                {newLocalInfo.discoName || localInfo.discoName}
                {/* Estoy haciendo las pruebas con este new.LocalInfo */}
              </div>

              {/* <div className="text-wrapper-10">{newLocalInfo.discoName || localInfo.discoName}</div> */}
              <p className="element-entrada-antes-de">
                <p className="local-category">Categorías: {localInfo.categories}</p>
                <span className="local-deals">{localInfo.deals}€ - </span>
                <span className="local-hour">{localInfo.hour}</span>
              </p>
              <p className="refresco-cerveza-o"> (Refresco, cerveza, copa, etc )</p>
              {/* <div className="rectangle-4" />
            <div className="text-wrapper-9">TOP TODAY</div>  */}
              {/* filtro de si el local está en la categoría 'novedad' poner en el top today */}
              <div className="text-wrapper-10">{localInfo.discoName}</div>
              <p className="text-wrapper-11">{localInfo.ubication}</p>
              <p className="div-2">
                <span className="text-wrapper-12">Oferta: </span>
                <span className="text-wrapper-13">{localInfo.promotion}</span>
              </p>
              <p className="local-available-dates">
                Fechas disponibles: {availableDates}
              </p>
            </div>

          )}
          {isEditing ? (
            <button onClick={handleSave} className="save-button">
              Guardar Cambios
            </button>
          ) : isProManager() ? (
            <div className="edit-buttons-card">
              <button className="add-local" onClick={handleEdit}>
                Editar
              </button>
              <button className="edit-local">Borrar</button>
              {/* pasar el ID a la función del API */}
            </div>
          ) : (
            // Botón de reserva normal
            <div className="reserve-button-container">
              <div className="reserve-button">
                {token ? (
                  <Link to={`/booking/${localInfo._id}`} className=".text-wrapper-6 ">RESERVAR</Link>
                ) : (
                  <Link to="/login&register" className=".text-wrapper-6 ">RESERVAR</Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LocalCard;
