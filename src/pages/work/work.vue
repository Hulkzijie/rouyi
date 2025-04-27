<route lang="json5">
{
  style: {
    navigationStyle: "custom",
    navigationBarTitleText: "工作台",
  },
}
</route>
<template>
  <wd-navbar
    fixed
    custom-style="background-color: #AA001E !important;color:#FFFFFF"
    safeAreaInsetTop
  >
    <template #title>
      <wd-text text="全部服务" color="#FFFFFF"></wd-text>
    </template>
  </wd-navbar>
  <view style="margin-top: 44px">
    <wd-card v-for="(item, index) in menuList" :key="index">
      <template #title>
        <uni-section
          :title="item.meta?.title"
          type="line"
          padding
          titleFontSize="16"
        >
          <wd-grid :column="4">
            <view v-for="(sup, index) in item.children" :key="index">
              <wd-grid-item
                custom-class="custom-item"
                use-icon-slot
                use-text-slot
                @click="handlerGridItemClick(sup)"
              >
                <template #icon>
                  <image class="slot-img" :src="getFullIconPath(sup.query?sup.query:'')" />
                  <!-- {{ getFullIconPath(sup.query) }} -->
                </template>
                <template #text>
                  <view class="text">{{ sup.meta?.title }}</view>
                </template>
              </wd-grid-item>
            </view>
          </wd-grid>
        </uni-section>
      </template>
    </wd-card>
  </view>
</template>

<script setup lang="ts">
import { useRouter } from '@/plugin/uni-mini-router'
const router = useRouter()
const goBack = () => {
  uni.navigateBack();
};
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();
import { useUserStore } from "../../store/user";

const userStore = useUserStore();
// 获取屏幕边界到安全区域距离
const handlerGridItemClick = (item: any) => {
  console.log("-33-", item);
  goDetailPage(item.path + `?title=${item.title}`);
};
const goDetailPage = (path: string) => {
  const url = `/${path}`;
  router.push({ path: 'pages-sub/car/productionvehicles/index' })
  console.log("url1122", url);
  // uni.navigateTo({
  //   url,
  // });
};

const menuList = userStore.routerMap;
// 配置映射（结合之前优化的路径管理）
const ICON_BASE_PATH = '/static/images/'

// 获取完整访问路径
function getFullIconPath(jsonStr) {
  if(jsonStr){
  const info = extractFileInfo(jsonStr)
  return info ? `${ICON_BASE_PATH}${info.fileName}.${info.ext || 'png'}` : ''
  }else{
    console.log("jsonStr-不能为空",jsonStr)
  }

}
/**
 * 通用文件信息提取器
 * @param {string} jsonStr - 原始JSON字符串
 * @param {string} [keyName='customIconPath'] - 目标字段名
 * @returns {Object} { fileName, ext, fullPath }
 */
 function extractFileInfo(jsonStr, keyName = 'customIconPath') {
  try {
  // 验证输入类型
  if (typeof jsonStr !== 'string') {
    console.log("jsonStr",jsonStr)
    console.error('Input must be a JSON string');
    return null;
  }

  // 检查空值
  if (!jsonStr.trim()) {
    console.error('Input is empty');
    return null;
  }
    // 安全解析JSON
    const data = JSON.parse(jsonStr)
    
    // 验证目标字段存在性
    if (!(keyName in data)) {
      throw new Error(`Key "${keyName}" not found`)
    }
    
    const fileString = data[keyName]
    
    // 提取处理（支持带路径的字符串）
    const [_, pathPart, namePart, extPart] = fileString.match(/(.*\/)?([^/]+?)\.([^.]+)$/) || []
    
    return {
      fileName: namePart || fileString,  // 无扩展名时的降级处理
      ext: extPart || '',
      fullPath: fileString,
      dirPath: pathPart || ''
    }
  } catch (error) {
    console.error('File extract failed:', error)
    return null
  }
}

console.log("menuList", menuList);
onLoad(() => {
  console.log("onLoad");
  userStore.getAppRouters();
  // console.log('a', menuList.values)
});
</script>

<style lang="scss" scoped>
:deep(.uni-section-header__decoration) {
  background-color: hsl(349, 100%, 33%) !important;
}
.slot-img {
  height: 24px;
  width: 24px;
  /* border-radius: 4px; */
}
.text {
  color: #333333;
  margin-top: 12px;
}
</style>
