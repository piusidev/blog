import config from '@/config/general'
import { IStore } from './types'

const Store = (key: string): IStore => {
  const localStorageKey = `${config.localStorageKey}-${key}`

  const get = <T>(): T => {
    try {
      const storage = JSON.parse(
        window.localStorage.getItem(localStorageKey) || ''
      )

      return storage
    } catch (err) {
      throw new Error('Unable to get storage!')
    }
  }

  const set = <T>(data: T) => {
    try {
      const stringfiedStorage = JSON.stringify(data)

      return window.localStorage.setItem(localStorageKey, stringfiedStorage)
    } catch (err) {
      throw new Error('Unable to set storage!')
    }
  }

  const merge = <T>(data: T) => {
    try {
      const currentStorage = get() || ''
      const mergedStorage = { ...currentStorage, ...data }

      return set<T>(mergedStorage)
    } catch (err) {
      throw new Error('Unable to merge storage!')
    }
  }

  const clear = (): void => {
    try {
      return window.localStorage.removeItem(localStorageKey)
    } catch (err) {
      throw new Error('Unable to remove item from storage!')
    }
  }

  return {
    get,
    set,
    merge,
    clear,
  }
}

export default Store
