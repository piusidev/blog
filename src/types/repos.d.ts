export interface IRepoResponse {
  name: string
  html_url: string
  language: string
  description: string
  stargazers_count: number

  owner: {
    login: string
  }
}

export interface IRepoData {
  url: string
  stars: string
  name: string
  language: string
  description: string
  owner: string
}
