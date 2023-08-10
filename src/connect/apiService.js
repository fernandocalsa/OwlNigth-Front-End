import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000"
});

const apiServiceInstance = {

getAllPlans: async () => {
    try {
        const response = await instance.get('/locals')
        return response.data
    } catch (error) {
        console.log('No me trae bien la data', error)
        }
    }
}

export default apiServiceInstance;
