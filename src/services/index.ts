import axios, { AxiosInstance } from 'axios';

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
