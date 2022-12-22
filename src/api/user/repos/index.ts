import { internalApi } from 'services/api';
import { IRepoData } from 'types/repos';
import { middleware } from '../middleware';

export const listRepos = async (
  page: number,
  perPage: number = 30,
): Promise<IRepoData[] | null> => {
  const response = await internalApi.get('/user/repos', {
    params: {
      page,
      per_page: perPage,
      type: 'public',
    },
  });

  if (Array.isArray(response.data)) {
    return response.data.map(middleware);
  }

  return null;
};
