
<route lang="json5">
    {
      style: {
        navigationStyle: 'custom',
        navigationBarTitleText: '工作台',
      },
    }
    </route>
<template>
    <view>
      <wd-navbar title="工作台"></wd-navbar>
      <!-- <uni-nav-bar
    title="自定义导航栏"
    left-icon="left"
    @clickLeft="goBack"
    class="fixed w-full"
    :border="false"
    :status-bar="true"
  ></uni-nav-bar> -->
  <view class="h-11" :style="{ paddingTop: safeAreaInsets?.top + 'px' }"></view>
  <view>
    <!-- <fly-content :line="20" /> -->
  </view>
    </view>
</template>

<script setup lang="ts">
 const goBack = () => {
    uni.navigateBack()
  }
  // 获取屏幕边界到安全区域距离
  const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
//
</style>