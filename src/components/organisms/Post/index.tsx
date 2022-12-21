import React from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from 'api/posts/get';

import Tag from 'components/atoms/Tag';
import { useQuery } from 'react-query';
import MarkdownPreview from 'components/atoms/MarkdonwPreview';
import { Container, Header } from './styles';

const Post: React.FC = () => {
  const { id } = useParams();

  const { data } = useQuery(['post', id], () => getPost(id));

  return (
    <Container>
      {
        data ? (
          <>
            <Header>
              <h1>{data.title}</h1>

              <div>
                { data.categories.map((i) => (<Tag name={i} />)) }
              </div>
            </Header>

            <MarkdownPreview content={data.content} />
          </>
        ) : null
      }
    </Container>
  );
};

export default Post;
