import { internalApi } from 'services/api';
import { IPostData } from '..';
import { middleware } from './middleware';

export const listPosts = async (page: number): Promise<IPostData[]> => {
  internalApi.defaults.headers.Accept = 'application/vnd.github+json';

  const response = await internalApi.get('/gists', {
    params: {
      page,
    },
  });

  return middleware(response.data);
};
