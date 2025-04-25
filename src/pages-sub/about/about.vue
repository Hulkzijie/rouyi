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


  </view> 
</template>

<script lang="ts" setup>
import { useUserStore } from '../../store/user'

const userStore = useUserStore()
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const a = userStore.getAppRouters()
console.log('a', a)
onLoad(()=>{
  console.log('onLoad')
  console.log('a', a)
})
</script>

<style lang="scss" scoped>
.test-css {
  // mt-4=>1rem=>16px;
  margin-top: 16px;
}
</style>
