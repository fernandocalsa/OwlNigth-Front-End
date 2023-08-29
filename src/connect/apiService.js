import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'} // para que me sirve esto?
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

    addLocal: async (localData) => {
        try {
          const response = await instance.post('/locals/add/upload', localData); // Ajusta la URL y el método según corresponda
          return response.data;
        } catch (error) {
          console.error('Error adding local:', error);
          throw error;
        }
      }
}

export default apiServiceInstance;
