<route lang="json5">
    {
      style: {
        navigationStyle: 'custom',
        navigationBarTitleText: '使用用车',
      },
    }
    </route>
<template>
    <view class="h-100vh bg-#F7F7F7 mt-44px p-2">
      <wd-navbar
      fixed
      custom-style="background-color: #AA001E !important;color:#FFFFFF"
      safeAreaInsetTop
    >
      <template #left>
        <wd-icon name="arrow-left" size="18px" @click="goBackHome"></wd-icon>
      </template>
    </wd-navbar>
        使用用车
    </view>
</template>

<script lang="ts" setup>
 const goBackHome = () => {
    uni.navigateBack(
      {
        delta: 1,
      }
    )
  } 
</script>
<style lang="scss" scoped>
//
</style>