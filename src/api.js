import react from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-projeto-cientifico.onrender.com',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST"
      }
});

