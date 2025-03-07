
<route lang="json5">
    {
      style: {
        navigationStyle: 'custom',
        navigationBarTitleText: '工作台',
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