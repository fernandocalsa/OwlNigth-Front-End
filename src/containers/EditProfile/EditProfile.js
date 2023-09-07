import React, { useState } from 'react';

const EditProfile = ({ userData, onSave }) => {
  // Extraer los datos del usuario de las props
  const { name: initialName, email: initialEmail, age: initialAge, profileImage: initialProfileImage } = userData;

  // Establecer los estados iniciales con los datos del usuario
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [age, setAge] = useState(initialAge);
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [newProfileImage, setNewProfileImage] = useState(null);

  const handleImageChange = (e) => {
    // Manejar la carga de la nueva imagen aquí
    const file = e.target.files[0];

    if (file) {
      // Puedes mostrar una vista previa de la imagen antes de subirla
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); // Mostrar la vista previa de la imagen
        setNewProfileImage(file); // Almacenar la nueva imagen para enviarla al servidor
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construir los datos actualizados del usuario
    const updatedUserData = {
      name,
      email,
      age,
      profileImage: newProfileImage || initialProfileImage, // Usar la nueva imagen si se ha cargado, de lo contrario, usar la imagen existente
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
