import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID P0PENYhrYjSBPfiFhKXSZIXBl2yFmd76wfJ7Mn7T6wM',
    }
});