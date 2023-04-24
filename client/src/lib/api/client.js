import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const client = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  baseURL: API_URL,
  withCredentials: true,
});

export default client;
