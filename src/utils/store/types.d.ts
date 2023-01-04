export interface IStore {
  get: <T>() => T
  set: <T>(data: T) => void
  merge: <T>(data: T) => void
  clear: () => void
}
