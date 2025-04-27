import { http, uniFileUpload } from "@/utils/http";

/** get 请求 */
export const getFooAPI = (name: string) => {
  return http<any>({
    url: `/foo`,
    method: "GET",
    query: { name },
  });
};

/** get 请求 */
export const postFooAPI = (name: string) => {
  return http<any>({
    url: `/foo`,
    method: "POST",
    query: { name }, // post 请求也支持 query
    data: { name },
  });
};

// 文件上传
export const fileUpload = (data: IUniUploadFileOptions) => {
  return uniFileUpload({
    url: `/foo/upload`,
    method: "POST",
    ...data,
  });
};

/** get 请求列表 */
export const getList = (page = 1, pageSize = 10) => {
  return http<any>({
    url: `/queryList`,
    method: "GET",
    query: { page, pageSize },
  });
};
//---------登录------------------------------------------
export const handlerLoginUser = (data: any) => {
  return http<any>({
    url: "/appSmsLogin",
    method: "POST",
    data: data,
  });
};
// 登出
export const logout = () => {
  return http<any>({
    url: "/logout",
    method: "POST",
  });
};
//个人信息
export const getInfo = () => {
  console.log("getInfo");
  return http<any>({
    url: "/getInfo",
    method: "GET",
  });
};
//可访问路由
export const getRouters = () => {
  console.log("getRouters");
  return http<any>({
    url: "/getRouters?type=app",
    method: "GET",
  });
};
// app验证码登录
export function getVerification(data: any) {
  const queryString = Object.keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&');
  return http({
    url:  `/getAppSmsCode?${queryString}`,
    method: "POST",
  });
}
// 获取验证码
export function getCodeImg() {
  return http({
    'url': '/captchaImage',
    header: {
      isToken: false
    },
    method: 'GET',
    timeout: 20000
  })
}



