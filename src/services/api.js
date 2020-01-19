import axios from 'axios';

const api = axios.create({
    baseURL: 'https://semanaomnistack10-backend.herokuapp.com'
});

export default api;