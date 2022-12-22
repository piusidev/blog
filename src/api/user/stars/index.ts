import { internalApi } from 'services/api';
import { middleware } from './middleware';
import { IStarsData } from './types';

export const listStars = async (
  page: number,
  perPage: number = 30,
): Promise<IStarsData[] | null> => {
  internalApi.defaults.headers.Accept = 'application/vnd.github+json';

  const response = await internalApi.get('/user/starred', {
    params: {
      page,
      per_page: perPage,
    },
  });

  if (Array.isArray(response.data)) {
    return response.data.map(middleware);
  }

  return null;
};
