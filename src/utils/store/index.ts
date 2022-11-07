import config from 'config/general';
import { IStore } from './types';

const Store = (key: string): IStore => {
  const localStorageKey = `${config.localStorageKey}-${key}`;

  const get = (): any => {
    try {
      const storage = JSON.parse(window.localStorage.getItem(localStorageKey));

      return storage;
    } catch (err) {
      throw new Error('Unable to get storage!', err);
    }
  };

  const set = (data: any): any => {
    try {
      const stringfiedStorage = JSON.stringify(data);

      return window.localStorage.setItem(localStorageKey, stringfiedStorage);
    } catch (err) {
      throw new Error('Unable to set storage!', err);
    }
  };

  const merge = (data: any): any => {
    try {
      const currentStorage = get();
      const mergedStorage = { ...currentStorage, ...data };

      return set(mergedStorage);
    } catch (err) {
      throw new Error('Unable to merge storage!', err);
    }
  };

  const clear = (): void => {
    try {
      return window.localStorage.removeItem(localStorageKey);
    } catch (err) {
      throw new Error('Unable to remove item from storage!', err);
    }
  };

  return {
    get,
    set,
    merge,
    clear,
  };
};

export default Store;
