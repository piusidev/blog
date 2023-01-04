import { internalApi } from '@/services/api'
import { IResumedPost } from '@/types/post'
import { middleware } from './middleware'

export const listPosts = async (
  page: number,
  perPage = 10
): Promise<IResumedPost[]> => {
  console.log('oi')
  const response = await internalApi.get('/gists', {
    params: {
      page,
      per_page: perPage,
    },
  })

  return middleware(response.data)
}
