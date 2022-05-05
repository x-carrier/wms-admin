
// {
//   "id":4,
//   "gmtCreate":"2022-04-15T14:42:58.891745",
//   "gmtModified":"2022-04-15T14:42:58.901576",
//   "version":0,
//   "deleted":0,
//   "name":"sku001",
//   "description":"物料001"
// }

export interface Sku {
  id: number
  gmtCreate: string
  gmtModified: string
  version?: number
  deleted?: number
  name: string
  description: string
}
