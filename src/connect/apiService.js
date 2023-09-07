import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

const apiServiceInstance = {

  getAllPlans: async () => {
    try {
      const response = await instance.get('/locals')
      return response.data
    } catch (error) {
      console.log('No me trae bien la data', error)
    }
  },

  usersLogin: async (usersName, password) => {
    try {
      const response = await instance.post('/usersnight/login', {
        usersName,
        password,
      });
      console.log(response.data, "este es el response.data");

      if (response.status === 200) {
        const responseData = response.data;
        console.log(responseData.message, "esto es el error");
        return {
          success: true,
          token: responseData.token,
          errorMessage: '',
        };
      } else {
        console.error('Error en usersLogin:', response.data);
        return {
          success: false,
          errorMessage: 'Credenciales inválidas',
        };
      }

    } catch (error) {
      console.error('Error en usersLogin:', error);
      return {
        success: false,
        token: null,
        errorMessage: 'Error de conexión',
      };
    }
  },

  loginProManager: async (proName, password) => {

    //crear el login en el front

    const response = await instance.post('/proManager/loginpro', {
      proName,
      password,
    });
    if (response.status === 200) {
      const responseData = response.data;
      console.log(responseData, "esto es el responseData");
      return {
        success: true,
        token: responseData.token,
        errorMessage: '',
      };
    } else {
      console.error('Error en usersLogin:', response.data);
      return {
        success: false,
        errorMessage: 'Credenciales inválidas',
      };
    }

  },

  registerUserNight: async (usersName, email, password, dni, age) => {
    try {
      const response = await instance.post("/usersNight", {
        usersName: usersName,
        email,
        password,
        dni,
        age,
      });
      console.log("esto es el response.data", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addLocal: async (localData) => {
    try {
      const response = await instance.post('/locals/add/upload', localData);
      return response.data;
    } catch (error) {
      console.error('Error adding local:', error);
      throw error;
    }
  },


  //revisar - no funciona!
  getUser: async (data) => {

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Usuario no autenticado');
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await instance.get('/usersnight/me', config);
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
      throw error;
    }
  },

  updateAvatar: async (avatarImg) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarImg);

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Usuario no autenticado');
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      const response = await instance.post('/usersnight/me/avatar', formData, config);

      if (response.status === 200) {
        console.log('Imagen de avatar actualizada con éxito');
      } else {
        console.error('Error al actualizar la imagen de avatar:', response.data);
        throw new Error('Error al actualizar la imagen de avatar');
      }
    } catch (error) {
      console.error('Error al actualizar la imagen de avatar:', error);
      throw error;
    }
  }

};

export default apiServiceInstance;
