import axios from 'axios';

const client = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  baseURL: 'https://port-0-ddingch-2fjdg2blg4kawh5.sel3.cloudtype.app',
  withCredentials: true,
});

export default client;
