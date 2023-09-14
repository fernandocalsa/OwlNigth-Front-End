import React, { useState, useEffect } from 'react';
import './UserProfile.css';
// import { useNavigate } from 'react-router-dom';
// import EditProfile from '../../containers/EditProfile/EditProfile';
import apiServiceInstance from '../../connect/apiService';
import { useAuth } from '../../connect/AuthContext/AuthContext';
import avatar from '../../images/iconoAvatar.png'
//la imagen se quita cuando recargo, eso es que no se está guardando en el back
//colocar css


const Profile = () => {
    const { logout, } = useAuth()

    const [avatarImg, setAvatarImg] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const [editAvatar, setEditAvatar] = useState(false);
    // const [edit, setEdit] = useState(false);
    const [dataUser, setDataUser] = useState({});
    // const navigate = useNavigate();

    useEffect(() => {
        apiServiceInstance.getUserData()
            .then(response => {
                setDataUser(response);
            })
            .catch(error => {
                console.error('Error al obtener los datos del usuario:', error);
            });
    }, []);

    // const handleAvatarChange = (event) => {
    //     const selected = event.target.files[0];
    //     if (selected) {
    //         setSelectedAvatar(selected);
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setAvatarImg(e.target.result);
    //         };
    //         reader.readAsDataURL(selected);
    //     }
    // };
    // const handleEditAvatar = async () => {
    //     try {
    //         if (selectedAvatar) {
    //             // Llama a la función de apiServiceInstance para actualizar el avatar
    //             const response = await apiServiceInstance.updateAvatar(selectedAvatar);

    //             // Actualiza el estado o realiza otras acciones si es necesario
    //             console.log('Imagen de avatar actualizada con éxito.');
    //             setAvatarImg(response.data.avatarUrl); // Actualiza la URL del avatar
    //             setEditAvatar(false); // Deja de editar el avatar
    //         } else {
    //             console.error('Debes seleccionar una imagen de avatar.');
    //         }
    //     } catch (error) {
    //         console.error('Error al actualizar la imagen de avatar:', error);
    //     }
    // };


    //FUTURA FUNCIÓN - EDITAR LOS DATOS DEL USUARIO, CON VALIDACIÓN
    // const handleEditClick = () => {
    //     setEdit(true);
    // };

    // const handleSaveProfile = (updatedUserData) => {
    //     apiServiceInstance.updateUser(updatedUserData)
    //     .then(response => {
    //         console.log('Datos de usuario actualizados:', response.data);
    //         setEdit(false);
    //     })
    //     .catch(error => {
    //         console.error('Error al actualizar los datos del usuario:', error);
    //     });
    // };

    return (
        <div className="profile-container">
            <h1 className='profile-name'>Bienvenido a tu perfil, {dataUser.usersName}</h1>
            <div className="user-info">
                <div className="user-avatar">
                    <img
                        className='user-image-profile'
                        src={avatarImg || avatar}
                        alt="Avatar del usuario"
                    />
                    {editAvatar && (
                        <button className="save-avatar-button">
                            Guardar imagen de perfil
                        </button>
                    )}
                </div>
                <div className="user-details">
                    <div className="name-wrapper-1">Nombre de Usuario</div>
                    <div className='rectangle-inputs-1'><p className='edit-buttor-for-user'>{dataUser.usersName}</p></div>
                    <div className="email-wrapper-3">Email</div>
                    <div className='rectangle-inputs-1'><p className='edit-buttor-for-user'>{dataUser.email}</p></div>
                    <div className="dni-wrapper-4">DNI</div>
                    <div className='rectangle-inputs-1'><p className='edit-buttor-for-user'>{dataUser.dni}</p></div>
                    <div className="age-wrapper-5">Edad</div>
                    <div className="age-input-container">
                        <div className='rectangle-inputs-2'><p className='edit-buttor-for-user'>{dataUser.age}</p></div>
                        <button className="edit-button edit-age-button">
                            <label
                                htmlFor="avatar-input"
                                className="edit-avatar-button"
                                onClick={() => setEditAvatar(true)}
                            >Editar imagen de perfil</label>
                        </button>
                    </div>
                </div>
            </div>

            <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar-input"
            />
        </div>
    );
};

export default Profile;
