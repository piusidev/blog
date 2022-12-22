import React from 'react';

import { IStarsData } from 'api/user/stars/types';
import { Star } from 'react-feather';
import { Card, Details } from './styles';

interface IPostProps {
  data: IStarsData
}

const Repo: React.FC<IPostProps> = ({ data }) => (
  <Card>
    <a href={data.url} target="__blank">
      {`${data.owner} / ${data.name}`}
    </a>
    <p>{data.description}</p>

    <Details>
      <p>{data.language}</p>
      <p className="stars">
        <Star />
        {data.stars.toLocaleString()}
      </p>
    </Details>
  </Card>
);

export default Repo;
