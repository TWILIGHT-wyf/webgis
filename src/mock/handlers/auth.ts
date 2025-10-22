import { rest, RestRequest, RestResponse, RestContext } from 'msw'
import { mockUsers } from '../data/user'
import type { LoginRequest,LoginResponse,User, } from '@/type/auth'

export const authHandlers = [
  rest.post(
    '/api/auth/login',
    async (req: RestRequest, res: RestResponse, ctx: RestContext): Promise<Response> => {
      try {
        const body: LoginRequest = await req.json() as LoginRequest
        const { username, password } = body
        const user: User | undefined = mockUsers.find(u => u.username === username)
        if (user && password === '123456') {
          const response: LoginResponse = {
            accessToken: 'mockToken',
            user
          }
          return res(ctx.staus(200),ctx.json(response))
        }
        return res(ctx.staus(401))
      } catch (error) {
        return res(ctx.staus(400))
        console.error(error)
      }
    },
  ),
]
