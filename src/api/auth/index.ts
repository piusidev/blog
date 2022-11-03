interface IAuthenticateResponse {
  data: {
    token: string
  }
}

export const authenticate = async (): Promise<IAuthenticateResponse> => {
  return await new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ data: { token: '123' } });
    }, 2000);
  });
};
