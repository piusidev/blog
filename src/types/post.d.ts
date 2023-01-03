export interface IResumedPost {
  id: string
  public: boolean
  created_at: string
  description: string
  files: IFiles
  title: string
  categories: string[]
}

interface IFile {
  filename: string
  language: string
  raw_url: string
}

export interface IFiles {
  [key: string]: IFile
}

export interface IPostData {
  title: string
  categories: string[]
  date: string
  content: string
}
