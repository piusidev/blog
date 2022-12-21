import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getDate } from 'utils/date';

import routes from 'config/routes';
import { IResumedPost } from 'types/post';
import { Card, Categories } from './styles';

interface IPostProps {
  data: IResumedPost
}

const Post: React.FC<IPostProps> = ({ data }) => {
  const { month, day } = getDate(data.created_at);

  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(routes.post.path.replace(':id', data.id))}>
      <p>{`${month} ${day}`}</p>
      <h5>{data.title}</h5>

      <Categories>
        {
          data.categories.map((category, index) => (
            <span key={index}>
              {category}
            </span>
          ))
        }
      </Categories>
    </Card>
  );
};

export default Post;
