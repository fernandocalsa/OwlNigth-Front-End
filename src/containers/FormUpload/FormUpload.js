import React, { useState } from 'react';
import axios from 'axios';
import ButtonAddLocal from '../../components/ButtonAddLocal/Button'

const FormUpload = () => {
  const [file, setFile] = useState(null);
  const [discoName, setDiscoName] = useState('');
  const [deals, setDeals] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('data', file);
    formData.append('discoName', discoName);
    formData.append('deals', deals);

    try {
      const response = await axios.post('/add/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error uploading image.');
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h2>Añadir Nuevo Local</h2>
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
          /><p className='euro'>€</p>
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            required
          />
        </div>
        {/* <button type="submit">Upload</button> */}
        <ButtonAddLocal>Añadir Local</ButtonAddLocal>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FormUpload;
