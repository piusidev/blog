import React from 'react'

import { Star } from 'react-feather'
import { IRepoData } from '@/types/repos'
import { Card, Details } from './styles'

interface IRepoProps {
  data: IRepoData
}

const Repo: React.FC<IRepoProps> = ({ data }) => (
  <Card>
    <a href={data.url} target="__blank">
      {`${data.owner} / ${data.name}`}
    </a>

    {data.description ? <p>{data.description}</p> : null}

    <Details>
      {data.language ? <p>{data.language}</p> : null}

      {data.stars ? (
        <p className="stars">
          <Star />
          {data.stars.toLocaleString()}
        </p>
      ) : null}
    </Details>
  </Card>
)

export default Repo
