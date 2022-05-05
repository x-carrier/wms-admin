export interface Result<T = any> {
  flag: boolean
  code: number
  message: string
  data?: T
}
