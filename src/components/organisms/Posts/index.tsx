import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ArrowLeft, ArrowRight } from 'react-feather';

import { listPosts } from 'api/posts/list';
import Post from 'components/atoms/Post';

import {
  Container, List, Actions, Button,
} from './styles';

const Posts: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(['posts', page], () => listPosts(page));

  return (
    <Container>
      <List>
        {
          !isLoading && data.map((post, index) => (
            <Post data={post} key={index} />
          ))
        }
      </List>

      <Actions>
        <Button
          disabled={page === 1}
          onClick={() => setPage(page <= 1 ? 1 : page - 1)}
        >
          <ArrowLeft />
        </Button>
        <Button disabled={!data?.length} onClick={() => setPage(page + 1)}><ArrowRight /></Button>
      </Actions>
    </Container>
  );
};

export default Posts;
