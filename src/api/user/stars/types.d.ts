export interface IStarsResponse {
  name: string
  html_url: string
  language: string
  description: string
  stargazers_count: number

  owner: {
    login: string
  }
}

export interface IStarsData {
  url: string
  stars: number
  name: string
  language: string
  description: string
  owner: string
}
