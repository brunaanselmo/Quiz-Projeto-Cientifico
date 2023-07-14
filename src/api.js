import react from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST"
      }
});
