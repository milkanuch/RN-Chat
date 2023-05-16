import { refresh } from 'services/auth/auth';
import { getStorageItem, setUserTokens } from 'services/storage/storage';
import { storageKeys } from 'services/storage/storage.types';

export const checkUserTokenStatus = async (): Promise<boolean> => {
  const refreshExpireDate = await getStorageItem(storageKeys.refreshExpireDate);
  const refreshToken = await getStorageItem(storageKeys.refreshToken);

  if (!refreshToken || !refreshExpireDate) {
    return false;
  }
  const isExpired = new Date(refreshExpireDate) < new Date();

  if (isExpired) {
    const newTokens = await refresh({ oldRefreshToken: refreshToken });

    await setUserTokens(newTokens);
    return true;
  }

  return true;
};
