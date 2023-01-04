import React from 'react'

import { getPost } from '@/api/posts/get'

import Tag from '@/components/atoms/Tag'
import { useQuery } from 'react-query'
import MarkdownPreview from '@/components/atoms/MarkdonwPreview'
import Loading from '@/components/atoms/Loading'
import { Container, Header } from './styles'
import { useRouter } from 'next/router'

const Post: React.FC = () => {
  const router = useRouter()

  const { id } = router.query

  const { data, isLoading } = useQuery(['post', id], () =>
    getPost(id as string)
  )

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <>
            <Header>
              <h1>{data.title}</h1>

              <div>
                {data.categories.map((tag, index) => (
                  <Tag name={tag} key={index} />
                ))}
              </div>
            </Header>

            <MarkdownPreview content={data.content} />
          </>
        )
      )}
    </Container>
  )
}

export default Post
