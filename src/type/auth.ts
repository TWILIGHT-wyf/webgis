export interface User {
  id: string
  username: string
  roles?: string[]
}

export interface LoginPayload {
  username: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken?: string
  user: User
}
