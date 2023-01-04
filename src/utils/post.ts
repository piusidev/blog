import { IFiles } from '@/types/post'

interface IPostData {
  title: string
  categories: string[]
}

export const getPostData = (text: string): IPostData => {
  const description = text.split(/\s\|\s/gm).slice(1)

  const title = description[0] || ''
  const categories = description[1].split(',') || []

  return {
    title,
    categories,
  }
}

export const getPostFile = (files: IFiles): string => {
  if (!files) {
    return ''
  }

  return Object.values(files).map((value) => value.raw_url)[0]
}
