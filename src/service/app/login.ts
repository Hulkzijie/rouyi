/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';
/** Login as user */
export async function getCodeImg({

  options,
}: {
  
  options?: CustomRequestOptions;
}) {
  return request<API.captchaImageResponse>('/captchaImage', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    ...(options || {}),
  });
}
// export async function handlerLoginUser({
//     body,
//     options,
//   }: {
//     body: API.LoginParams;
//     options?: CustomRequestOptions;
//   }) {
//     console.log("登录函数",body)
//     return request<unknown>('/appLogin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: body,
//       ...(options || {}),
//     });
// }
export async function handlerLoginUser(data:any) {
  return request<any>('/appLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  });
}
export const logout = () => {
  console.log("登出")
}
export const getInfo = ()=>{
  console.log("getInfo")
}
  