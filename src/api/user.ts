import request from '@/utils/request'
import { Result } from '@/types/result'
import { User } from '@/types/user'

export const login = (username: string, password: string) => {
  // return request({
  //   method: 'POST',
  //   url: '/data/user/login',
  //   data: {
  //     username,
  //     password
  //   }
  // })

  return request.post<Result<User>>('/data/user/login', { username, password })
}
