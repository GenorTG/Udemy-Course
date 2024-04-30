import { ApiResponse } from 'types/RandomPersonResult'

export const fetchRandomUser = async (): Promise<ApiResponse> => {
  const response = await fetch('https://randomuser.me/api/')
  if (!response.ok) {
    throw new Error('Failed to fetch a random user')
  }
  return response.json()
}
