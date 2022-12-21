import { IResumedPost } from 'types/post';
import { getPostData, getPostFile } from 'utils/post';

export const middleware = (data: IResumedPost) => {
  const { categories, title } = getPostData(data.description);
  const file = getPostFile(data.files);

  return {
    ...data,
    file,
    title,
    categories,
  };
};
