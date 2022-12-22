import { IRepoData, IRepoResponse } from 'types/repos';

export const middleware = (data: IRepoResponse): IRepoData => ({
  url: data.html_url || '',
  description: data.description || '',
  language: data.language || '',
  name: data.name || '',
  owner: data.owner.login || '',
  stars: data.stargazers_count.toString() || '0',
});
