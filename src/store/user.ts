import { defineStore } from "pinia";
import { ref } from "vue";
import {
  setToken as _setToken,
  getToken as _getToken,
  removeToken,
} from "@/utils/cache";
import { deepTransformMenuData } from "@/utils/formart";
import { logout as _logout,handlerLoginUser,getInfo,getRouters} from "@/service/index/login";
type UserInfo = {
  id: string;
  name: string;
  avatar: string;
  roles: string[];
};
export const useUserStore = defineStore(
  "user",
  () => {
    // State
    const token = ref<string>(_getToken() || "");
    const id = ref("");
    const name = ref("");
    const avatar = ref("");
    const roles = ref<string[]>([]);
    const permissions = ref([]);
    const user = ref();
    const routerMap = ref([])
    // Getters
    const isLoggedIn = computed(() => Boolean(token.value));
    // Actions
    const getUserInfo = async () => {
     const res = await getInfo()
     if(res.code === 200){
      roles.value = res.data.roles
      avatar.value = res.data.user.avatar
      user.value =res.data.user
      permissions.value = res.data.permissions
     }else {
      console.error("getInfo")
     }

    }
    const getAppRouters = async () =>{
     const res = await getRouters()
     console.log("getRouters",res)
     routerMap.value = deepTransformMenuData(res.data)

      
    }
    const setUserInfo = (info: UserInfo) => {
      id.value = info.id;
      name.value = info.name;
      avatar.value = info.avatar;
      roles.value = info.roles;
    };
    const loginSuccess = async (data:any) =>{
      try{
      const res = await handlerLoginUser(data)
      if(res.code ==200){
        setToken(res.data.token)
        getUserInfo() //
        getAppRouters()//
        uni.showToast({
                icon: 'none',
                title:'登录成功',
        })
        uni.switchTab({
          url: '/pages/index/index'
        })
       }
      }catch{
        console.error("user")
      }
    }
    const logout = async () => {
      try {
        const res = await _logout();
        if (res.code === 200) {
          token.value = "";
          id.value = "";
          name.value = "";
          avatar.value = "";
          roles.value = [];
          removeToken();
          uni.navigateTo({
            url: '/pages/login/index'
          })
        }else {
          uni.showToast({
            icon: 'none',
            title: res.msg,
          })
        }
      } catch (err) {
        console.error("退出失败", err);

      }
    };
    // 设置 Token
    const setToken = (value: string) => {
      _setToken(value);
      token.value = value;
    };
    
    return {
      setToken,
      isLoggedIn,
      setUserInfo,
      logout,
      loginSuccess,
      getUserInfo
    };
  },
  {
    persist: true,
  }
);
