import { httpGet,httpPost } from "@/utils/http";
// 获取用户详细信息
export function getInfo() {
	return httpGet('/getInfo')
}