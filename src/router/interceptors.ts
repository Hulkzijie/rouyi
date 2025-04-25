import { useUserStore } from '@/store';
import { isWhiteList } from '@/router';

const navigateToInterceptor = {
  invoke({ url }: { url: string }) {
    // 判断是否登录
    console.log("-判断是否登录-", useUserStore().isLoggedIn)
    if (useUserStore().isLoggedIn) {
      return true;
    } else {
      const flag = isWhiteList(url);
      console.log('flag', flag)
      if (!flag) return uni.navigateTo({ url: '/sub-pages/login/index' });
      return flag;
    }
  },
};

export const routeInterceptor = {
  install() {
    uni.addInterceptor('navigateTo', navigateToInterceptor);
    uni.addInterceptor('reLaunch', navigateToInterceptor);
    uni.addInterceptor('redirectTo', navigateToInterceptor);
  },
};
