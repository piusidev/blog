import { IStarsData, IStarsResponse } from './types';

export const middleware = (data: IStarsResponse): IStarsData => ({
  url: data.html_url || '',
  description: data.description || '',
  language: data.language || '',
  name: data.name || '',
  owner: data.owner.login || '',
  stars: data.stargazers_count || 0,
});
