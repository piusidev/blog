import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { listRepos } from 'api/user/repos';
import { IRepoData } from 'types/repos';

import Repo from 'components/atoms/Repo';
import DataGrid from 'components/molecules/DataGrid';

const Repos: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(['repos', page], () => listRepos(page));

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

export default Repos;
