import React, { useState } from 'react';
import apiServiceInstance from '../../connect/apiService';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import owl from "../../images/logoOwl.png"
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import "./AddLocal.css"

const AddLocal = () => {
  //MODELO del Locales
  const [discoName, setDiscoName] = useState('');
  const [ubication, setUbication] = useState('');
  const [promotion, setPromotion] = useState('');
  const [deals, setDeals] = useState('');
  const [hour, setHour] = useState('');
  const [imgUrl, setimgUrl] = useState(null);
  const initialDate = new Date();
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [message, setMessage] = useState('');
  const [selectMessage, setSelectMessage] = useState('');
  const [imgSelected, setImgSelected] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);


  const handleDateChange = (date) => {
    setCurrentDate(date);
  };

  const handleAddDate = () => {
    if (currentDate && !availableDates.includes(currentDate)) {
      const formattedDate = format(currentDate, 'yyyy-MM-dd');
      setAvailableDates([...availableDates, formattedDate]);
      setCurrentDate(null);
      console.log(availableDates, "QUE COÑO ES ESTO???")
    }
  };

  const handleRemoveDate = (dateToRemove) => {
    const updatedDates = availableDates.filter((date) => date !== dateToRemove);
    setAvailableDates(updatedDates);
  };

  console.log(availableDates, "AQUI ESTA MI ARRAY!!!!");

  const handleImageChange = (event) => {
    setimgUrl(event.target.files[0]);
    setImgSelected(true)
    setSelectMessage('*Archivo seleccionado correctamente*')
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formattedDates = selectedDate.toISOString();
    console.log(formattedDates, "formattedDates");
    console.log(event, "este es el evento");
    const formData = new FormData();
    formData.append('discoName', discoName);
    formData.append('deals', deals);
    formData.append('imgUrl', imgUrl);
    formData.append('ubication', ubication);
    formData.append('hour', hour);
    formData.append('promotion', promotion);
    // formData.append('date', date);
    formData.append('availableDates', formattedDates);
    formData.append('categories', selectedCategories);

    try {
      const response = await apiServiceInstance.addLocal(formData);
      setMessage('*Local Añadido Correctamente*');
      setRedirect(true);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const categories = [
    { name: "Festivales y Macro Discotecas" },
    { name: "Despedidas de Soltera" },
    { name: "Conciertos" },
    { name: "Celebraciones y Eventos" },
    { name: "Novedades" },
  ];

  return (
    <div className="add-local-container">
      <div className="back-button-add-local">
        <Link to="/locals">
          <span>&lt;</span>
        </Link>
      </div>
      <div className="owl-background">
        <img className="owl-img" alt="Group" src={owl} />
      </div>
      <div className="form-container">
        <div className="login-overlap">
          <div className="login-overlap-group">
            <h1 className="text-init">Añadir Oferta</h1>
          </div>
        </div>
        <form className='add-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="discoName">Nombre del Lugar:</label>
            <input
              type="text"
              id="discoName"
              value={discoName}
              onChange={(e) => setDiscoName(e.target.value)}
              required
              placeholder='Ej: Nombre del local o fiesta'
            />
          </div>
          <div>
            <label htmlFor="ubication">Ubicación:</label>
            <input
              type="text"
              id="ubication"
              value={ubication}
              onChange={(e) => setUbication(e.target.value)}
              required
              placeholder='Ej: Calle de Atocha, 125, 28012 Madrid '
            />
          </div>
          {/* <div>
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div> */}
          <div>
            <label htmlFor="promotion">Promoción:</label>
            <input
              type="text"
              id="promotion"
              value={promotion}
              onChange={(e) => setPromotion(e.target.value)}
              required
              placeholder='Ej: bebida + entrada...'
            />
            <p className='success-message-promotion'>*Bebidas: (Refresco, cerveza, copa, etc )*</p>
          </div>
          <div>
            <label htmlFor="deals">Precio(€):</label>
            <input
              type="number"
              id="deals"
              value={deals}
              onChange={(e) => setDeals(e.target.value)}
              required
              placeholder='Ej: 15 €'
            />
          </div>
          <div>
            <label>Selecciona una fecha:</label>
            <DatePicker
              id="date"
              selected={currentDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              isClearable
              placeholderText="Seleccione una fecha"
              required
            />
            <button onClick={handleAddDate}>Agregar Fecha</button>
          </div>
          <ul>
            {availableDates.map((date, index) => (
              <li key={index}>
                {date}
                <button onClick={() => handleRemoveDate(date)}>Eliminar</button>
              </li>
            ))}
          </ul>

          <div>
            <label htmlFor="hour">Hora de entrada:</label>
            <input
              type="text"
              id="hour"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              required
              placeholder='Ej: Entrada antes de la 1:30 a.m.'
            />
          </div>
          <div>
            <label htmlFor="categories">Categorías:</label>
            <select
              id="categories"
              multiple
              value={selectedCategories}
              onChange={(e) => setSelectedCategories(Array.from(e.target.selectedOptions, (option) => option.value))}
              required
            >
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="imgUrl">Imagen:</label>
            <input
              type="file"
              id="imgUrl"
              onChange={handleImageChange}
              required
            />
            {imgSelected && (
              <p className="selected-message">{selectMessage}</p>
            )}
          </div>
          <button type="submit">Add Local</button>
          {message ? (<p className="success-message">{message}</p>) : (<p className="success-message">*No se ha podido añadir el local*</p>)}
        </form>
        {redirect && (
          <Link to="/locals">
            <div className="icons8-volver">Volver</div>
          </Link>
        )}
      </div>
    </div>

  );
};

export default AddLocal;
