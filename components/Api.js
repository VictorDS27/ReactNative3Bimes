import axios from 'axios';

const api = axios.create9({
    baseURL:'https://api.hgbrasil.com/'
});

export default api;