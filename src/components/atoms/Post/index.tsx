import React from 'react'

import { getDate } from '@/utils/date'

import routes from '@/config/routes'
import { IResumedPost } from '@/types/post'
import { Card, Categories } from './styles'
import Tag from '../Tag'
import { useRouter } from 'next/router'

interface IPostProps {
  data: IResumedPost
}

const Post: React.FC<IPostProps> = ({ data }) => {
  const { month, day } = getDate(data.created_at)

  const router = useRouter()

  return (
    <Card onClick={() => router.push(routes.post(data.id))}>
      <p>{`${month} ${day}`}</p>
      <h5>{data.title}</h5>

      <Categories>
        {data.categories.map((category, index) => (
          <Tag name={category} key={index} />
        ))}
      </Categories>
    </Card>
  )
}

export default Post
