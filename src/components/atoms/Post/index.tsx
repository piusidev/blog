import React from 'react';

import { IPostData } from 'api/posts';
import { getDate } from 'utils/date';

import { Card, Categories } from './styles';

interface IPostProps {
  data: IPostData
}

const Post: React.FC<IPostProps> = ({ data }) => {
  const { month, day } = getDate(data.created_at);

  return (
    <Card>
      <p>{`${month} ${day}`}</p>
      <h5>{data.title}</h5>

      <Categories>
        {
          data.categories.map((category) => (
            <span>
              #
              {category}
            </span>
          ))
        }
      </Categories>

    </Card>
  );
};

export default Post;
