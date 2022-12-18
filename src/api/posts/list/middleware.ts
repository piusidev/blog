import { IGistData } from '..';

export const middleware = (data: IGistData[]) => {
  const posts = data.filter((i) => i.description.includes('blog-post'));

  const parsedData = posts.map((post) => {
    const description = post.description.split(/\s\|\s/gm).slice(1);
    const title = description[0] || '';
    const categories = description[1].split(',') || [];

    return {
      ...post,
      title,
      categories,
    };
  });

  return parsedData;
};
