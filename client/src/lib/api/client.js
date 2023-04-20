import axios from 'axios';

const client = axios.create({
  headers: {
    'Access-Control-Allow-Origin':
      'https://port-0-ddingch-2fjdg2blg4kawh5.sel3.cloudtype.app',
  },
  baseURL: 'https://port-0-ddingch-2fjdg2blg4kawh5.sel3.cloudtype.app',
  withCredentials: true,
});

export default client;
