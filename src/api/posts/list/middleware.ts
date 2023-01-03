import { IResumedPost } from '@/types/post'
import { getPostData, getPostFile } from '@/utils/post'

export const middleware = (data: IResumedPost[]) => {
  const posts = data.filter((i) => i.description.includes('blog-post'))

  const parsedData = posts.map((post) => {
    const { categories, title } = getPostData(post.description)
    const file = getPostFile(post.files)

    return {
      ...post,
      file,
      title,
      categories,
    }
  })

  return parsedData
}
