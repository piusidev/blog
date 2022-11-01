export interface IStore {
  get: () => any
  set: (data: any) => any
  merge: (data: any) => any
}
