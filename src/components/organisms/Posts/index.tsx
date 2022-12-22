import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { listPosts } from 'api/posts/list';
import { IResumedPost } from 'types/post';

import Post from 'components/atoms/Post';
import DataGrid from 'components/molecules/DataGrid';

const Posts: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(['posts', page], () => listPosts(page));

  const renderItem = (item: IResumedPost) => (
    <Post data={item} />
  );

  return (
    <DataGrid
      isLoading={isLoading}
      page={page}
      setPage={setPage}
      renderItem={renderItem}
      data={data}
    />
  );
};

export default Posts;
