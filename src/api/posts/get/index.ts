import { IResumedPost, IPostData } from 'types/post';
import { internalApi, api } from 'services/api';
import { middleware } from './middleware';

export const getGist = async (id: string): Promise<IResumedPost> => {
  internalApi.defaults.headers.Accept = 'application/vnd.github+json';

  const response = await internalApi.get(`/gists/${id}`);

  return middleware(response.data);
};

export const getFile = async (file: string): Promise<string> => {
  const response = await api.get(file);

  return response.data;
};

export const getPost = async (id: string): Promise<IPostData> => {
  const gist = await getGist(id);

  const fileUrls = Object.values(gist.files).map((value) => value.raw_url);

  const file = await getFile(fileUrls[0]);

  return {
    title: gist.title,
    categories: gist.categories,
    date: gist.created_at,
    content: file,
  };
};
