import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { listStars } from 'api/user/stars';
import { IRepoData } from 'types/repos';

import Repo from 'components/atoms/Repo';
import DataGrid from 'components/molecules/DataGrid';

const Stars: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(['stars', page], () => listStars(page));

  const renderItem = (item: IRepoData) => (
    <Repo data={item} />
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

export default Stars;
