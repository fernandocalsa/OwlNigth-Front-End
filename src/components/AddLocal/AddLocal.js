import React, { useState } from 'react';
import apiServiceInstance from '../../connect/apiService';
import { Link } from 'react-router-dom';
import owl from "../../images/logoOwl.png"
import "./AddLocal.css"

const AddLocal = () => {
  const [discoName, setDiscoName] = useState('');
  const [ubication, setUbication] = useState('');
  const [date, setDate] = useState('');
  const [promotion, setPromotion] = useState('');
  const [deals, setDeals] = useState('');
  const [hour, setHour] = useState('');
  const [imgUrl, setimgUrl] = useState(null);
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleImageChange = (event) => {
    setimgUrl(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event, "este es el evento");

    const formData = new FormData();
    formData.append('discoName', discoName);
    formData.append('deals', deals);
    formData.append('imgUrl', imgUrl);
    formData.append('ubication', ubication);
    formData.append('hour', hour);
    formData.append('promotion', promotion);
    formData.append('date', date);

    try {
      const response = await apiServiceInstance.addLocal(formData);

      setMessage('Local Añadido Correctamente');
      setRedirect(true);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-local-container">
      <div className="back-button">
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
            <h1 className="text-init">Añadir Local</h1>
          </div>
        </div>
        <form className='add-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="discoName">Disco Name:</label>
            <input
              type="text"
              id="discoName"
              value={discoName}
              onChange={(e) => setDiscoName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="ubication">Ubication:</label>
            <input
              type="text"
              id="ubication"
              value={ubication}
              onChange={(e) => setUbication(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="promotion">Promotion:</label>
            <input
              type="text"
              id="promotion"
              value={promotion}
              onChange={(e) => setPromotion(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="deals">Deals:</label>
            <input
              type="number"
              id="deals"
              value={deals}
              onChange={(e) => setDeals(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="hour">Hour:</label>
            <input
              type="text"
              id="hour"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="imgUrl">Image:</label>
            <input
              type="file"
              id="imgUrl"
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit">Add Local</button>
        </form>
        {message && <p className="success-message">{message}</p>}
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
