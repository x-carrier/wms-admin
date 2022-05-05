// {
//   "flag": true,
//   "code": 20000,
//   "message": "获取用户信息成功",
//   "data": {
//     "id": 1,
//     "gmtCreate": "2022-04-29T18:03:29.226649",
//     "gmtModified": "2022-04-29T18:03:29.226649",
//     "version": 0,
//     "deleted": 0,
//     "username": "kevin",
//     "password": null,
//     "headImage": "",
//     "isSystem": 0,
//     "status": 0,
//     "roleList": null,
//     "permissionList": null
//   }
// }

export interface User {
  id: number
  gmtCreate: string
  gmtModified: string
  version: number
  deleted: number
  username: string
  password: string
  headImage: string
  isSystem: number
  status: number
  roleList: Array<string>
  permissionList: Array<string>
}
