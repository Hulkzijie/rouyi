import { httpGet,httpPost } from "@/utils/http";


// app验证码登录
export function getVerification(query:any) {
	const queryString = new URLSearchParams(query).toString();
	return httpPost(`/getAppSmsCode?${queryString}`, );
}
// 登录
export function login(query:any) {
	return httpPost('/appSmsLogin', query);
}
// 退出登录
export function logout(query:any) {
	return httpPost('/logout', query);
}
// 注册
export function register(query:any) {
	return httpPost('/register', query);
}
