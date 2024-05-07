import { LOCAL_STORAGE_NAME } from '../../constants';
import { TypeSpell } from '../../types';

export const saveFavToLocalStorage = (data: TypeSpell[]) => {
  const dataToStore = JSON.stringify(data);
  localStorage.setItem(LOCAL_STORAGE_NAME, dataToStore);
};

export const getFavFromLocalStorage = () => {
  const localStorageRaw = localStorage.getItem(LOCAL_STORAGE_NAME);
  if (localStorageRaw) {
    const localStorageParsed: TypeSpell[] = JSON.parse(localStorageRaw);
    return localStorageParsed;
  }
};

export const removeLocalStorageItem = () => {
  localStorage.removeItem(LOCAL_STORAGE_NAME);
};
