import React, { useState } from 'react';
import axios from 'axios';
import apiServiceInstance from '../../connect/apiService';
import { Link } from 'react-router-dom';

const PruebaPost = () => {
  const [discoName, setDiscoName] = useState('');
  const [deals, setDeals] = useState('');
  const [message, setMessage] = useState('');
  const [imgUrl, setimgUrl] = useState(null);
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

    try {
      const response = await axios.post(apiServiceInstance.addLocal(formData), formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Local added successfully');
      setRedirect(true);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Prueba de Solicitud POST</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="imgUrl">Image:</label>
          <input
            type="file"
            id="imgUrl"
            onChange={handleImageChange}
            required
          />{console.log(imgUrl)}
        </div>
        <button type="submit" >Enviar Solicitud POST: {redirect && <Link to="/locals" />}</button>
      </form>
      
      {message && <p>{message}</p>}
    </div>
  );
};

export default PruebaPost;
