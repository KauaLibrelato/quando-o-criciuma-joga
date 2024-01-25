import {storage} from '../../../utils/constants';
import {StorageService} from './storageService';

//Abstração
export const mmkvStorage: StorageService = {
  getItem: async key => {
    const item = storage.getString(key);
    if (item != null) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    storage.set(key, JSON.stringify(value));
  },
  removeItem: async key => {
    storage.delete(key);
  },
};
