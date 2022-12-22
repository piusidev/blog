import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ArrowLeft, ArrowRight } from 'react-feather';

import Loading from 'components/atoms/Loading';
import { listStars } from 'api/user/stars';
import Repo from 'components/atoms/Repo';
import {
  Container, List, Actions, Button,
} from './styles';

const Stars: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(['stars', page], () => listStars(page));

  return (
    <Container>
      {
        isLoading ? (<Loading />) : (
          <>
            <List>
              {
                data.map((post, index) => (
                  <Repo data={post} key={index} />
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
              <Button
                disabled={!data?.length}
                onClick={() => setPage(page + 1)}
              >
                <ArrowRight />
              </Button>
            </Actions>
          </>
        )
      }
    </Container>
  );
};

export default Stars;
