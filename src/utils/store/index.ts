import config from 'config/general';

const localStorageKey = config.localStorageKey;

export const get = (key: string = localStorageKey): any => {
  try {
    const storage = JSON.parse(window.localStorage.getItem(key));

    return storage;
  } catch (err) {
    throw new Error('Unable to get storage!', err);
  }
};

export const set = (data: any, key: string = localStorageKey): any => {
  try {
    const stringfiedStorage = JSON.stringify(data);

    return window.localStorage.setItem(key, stringfiedStorage);
  } catch (err) {
    throw new Error('Unable to set storage!', err);
  }
};

export const merge = (data: any, key: string = localStorageKey): any => {
  try {
    const currentStorage = get(key);
    const mergedStorage = { ...currentStorage, ...data };

    return set(mergedStorage, key);
  } catch (err) {
    throw new Error('Unable to merge storage!', err);
  }
};

export default {
  get,
  set,
  merge
};
