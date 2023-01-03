interface IAuthenticateResponse {
  data: {
    token: string
  }
}

export const authenticate = async (): Promise<IAuthenticateResponse> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { token: '123' } })
    }, 2000)
  })
