import { internalApi } from 'services/api';
import { IResumedPost } from 'types/post';
import { middleware } from './middleware';

export const listPosts = async (page: number): Promise<IResumedPost[]> => {
  const response = await internalApi.get('/gists', {
    params: {
      page,
    },
  });

  return middleware(response.data);
};
