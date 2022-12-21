import React from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from 'api/posts/get';

import Tag from 'components/atoms/Tag';
import { useQuery } from 'react-query';
import MarkdownPreview from 'components/atoms/MarkdonwPreview';
import Loading from 'components/atoms/Loading';
import { Container, Header } from './styles';

const Post: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(['post', id], () => getPost(id));

  return (
    <Container>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            <Header>
              <h1>{data.title}</h1>

              <div>
                { data.categories.map((i) => (<Tag name={i} />)) }
              </div>
            </Header>

            <MarkdownPreview content={data.content} />
          </>
        )
      }
    </Container>
  );
};

export default Post;
