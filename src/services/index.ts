import axios, { AxiosInstance } from 'axios';

import { getStorageItem } from 'services/storage/storage';
import { storageKeys } from 'services/storage/storage.types';

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getInstanceBearer = async () => {
  const bearer = await getStorageItem(storageKeys.accessToken);
  const instanceBearer: AxiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${bearer}`,
    },
  });

  return instanceBearer;
};
