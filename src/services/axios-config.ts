import axios, { AxiosInstance } from 'axios'

const baseURL = process.env.GITHUB_API

const headers = {
  'Content-Type': 'application/json',
}

export const axiosClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL,
    headers,
  })

  api.interceptors.response.use()

  return api
}

export const axiosInternalClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL,
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
      Accept: 'application/vnd.github+json',
    },
  })

  api.interceptors.response.use()

  return api
}
