import { internalApi } from 'services/api';
import { IGistData } from '..';
import { middleware } from './middleware';

export const listGists = async (page: number): Promise<IGistData[]> => {
  internalApi.defaults.headers.Accept = 'application/vnd.github+json';

  const response = await internalApi.get('/gists', {
    params: {
      page,
    },
  });

  return middleware(response.data);
};
