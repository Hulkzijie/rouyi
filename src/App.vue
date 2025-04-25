<script setup lang="ts">
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app";
import "abortcontroller-polyfill/dist/abortcontroller-polyfill-only";
import { beforEach } from "@/router/index";

// 定义全局数据
const globalData = {
  isLocalConfig: true,
  systemInfo: uni.getSystemInfoSync(),
  navHeight: 44,
};

// 应用生命周期
onLaunch((options) => {
  console.log("App Launch");
  console.log("应用启动路径：", options.path);
})

onShow((options) => {
  console.log("App Show");
  console.log("应用启动路径：", options.path);
  // 首次进入页面时路由拦截
  setTimeout(() => {
    const currentPage = options.path;
    beforEach(
      { path: "/" },
      { path: currentPage, fullPath: currentPage },
      (data: { path: any; }) => {
        if (data?.path) {
          uni.redirectTo({ url: data.path });
        }
      }
    );
  }, 100);
})

onHide(() => {
  console.log("App Hide");
})

// 将globalData暴露给全局
uni.getApp = () => {
  return {
    globalData
  };
};
</script>

<style lang="scss">
/* stylelint-disable selector-type-no-unknown */
button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

// 单行省略，优先使用 unocss: text-ellipsis
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 两行省略
.ellipsis-2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

// 三行省略
.ellipsis-3 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
// 修改进度条颜色
#nprogress .bar {
  background: #aa001e;
}
</style>
