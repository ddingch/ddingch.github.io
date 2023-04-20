import axios from 'axios';

const client = axios.create({
  headers: {
    Accept: 'text/plain',
    'Content-Type': 'text/plain',
    Cache: 'no-cache',
  },
  baseURL: 'https://port-0-ddingch-2fjdg2blg4kawh5.sel3.cloudtype.app',
  withCredentials: true,
});

export default client;
