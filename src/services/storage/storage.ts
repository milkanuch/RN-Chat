import { setItemAsync, getItemAsync, deleteItemAsync } from 'expo-secure-store';

import { TokensParams } from 'services/auth/auth.types';

import { storageKeys } from './storage.types';

export const getStorageItem = async (key: storageKeys) => {
  try {
    const value = await getItemAsync(key);

    return value;
  } catch (error) {
    throw new Error(`Error getting item, ${error}`);
  }
};

export const setStorageItem = async (key: storageKeys, value: string) => {
  try {
    await setItemAsync(key, value);
  } catch (error) {
    throw new Error(`Error setting  item, ${error}`);
  }
};

export const deleteStorageItem = async (key: storageKeys) => {
  try {
    await deleteItemAsync(key);
  } catch (error) {
    throw new Error(`Error deleting item, ${error}`);
  }
};

export const setUserTokens = async (tokens: TokensParams) => {
  try {
    const {
      accessToken,
      refreshToken,
      accessTokenExpiration,
      refreshTokenExpiration,
    } = tokens;

    await setStorageItem(storageKeys.accessToken, accessToken);
    await setStorageItem(storageKeys.refreshToken, refreshToken);
    await setStorageItem(storageKeys.accessExpireDate, accessTokenExpiration);
    await setStorageItem(storageKeys.refreshExpireDate, refreshTokenExpiration);
  } catch (error) {
    throw new Error(`Error setting user tokens, ${error}`);
  }
};

export const deleteUserTokens = async () => {
  try {
    await deleteStorageItem(storageKeys.accessToken);
    await deleteStorageItem(storageKeys.refreshToken);
    await deleteStorageItem(storageKeys.accessExpireDate);
    await deleteStorageItem(storageKeys.refreshExpireDate);
  } catch (error) {
    throw new Error(`Error deleting user tokens, ${error}`);
  }
};
