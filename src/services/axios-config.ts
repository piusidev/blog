import axios, { AxiosInstance } from 'axios';

const axiosClient = (): AxiosInstance => {
  const baseURL = process.env.BONFIRE_SERVER_ENDPOINT;
  const api = axios.create({
    baseURL,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': '*',
      'access-control-allow-headers': '*',
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.response.use();

  return api;
};

export default axiosClient;
