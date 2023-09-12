import React, { useState } from 'react';

const EditProfile = ({ userData, onSave }) => {
  const { name: initialName, email: initialEmail, age: initialAge, profileImage: initialProfileImage } = userData;

  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [age, setAge] = useState(initialAge);
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [newProfileImage, setNewProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        setNewProfileImage(file); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = {
      name,
      email,
      age,
      profileImage: newProfileImage || initialProfileImage,
    };
    onSave(updatedUserData);
  };

  return (
    <div className="edit-profile-container">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Foto de Perfil:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {profileImage && (
            <img
              src={profileImage}
              alt="Preview"
              style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }}
            />
          )}
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditProfile;
