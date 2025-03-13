<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的',
  },
}
</route>

<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
  <uv-qrcode ref="qrcode" size="300px" value="https://h5.uvui.cn"></uv-qrcode> 
  <!-- <view class="text-center text-3xl mt-8">
      鸽友们好，我是
      <text class="text-red-500">菲鸽</text>
    </view>
    <RequestComp />
    <UploadComp />  -->

  </view> 
</template>

<script lang="ts" setup>
import { useUserStore } from '../../store/user'
import RequestComp from './components/request.vue'
import UploadComp from './components/upload.vue'
const userStore = useUserStore()
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

</script>

<style lang="scss" scoped>
.test-css {
  // mt-4=>1rem=>16px;
  margin-top: 16px;
}
</style>
