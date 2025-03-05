<template>
  <view>
    <view class="work">
      <view class="work__title">
        <view class="work__title-text">工作</view>
      </view>
      <view class="work__list">
        <view class="work__list-item" v-for="(item, index) in list" :key="index">
          <view class="work__list-item-title">
            {{ item.title }}
          </view>
          <view class="work__list-item-content">
            {{ item.content }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Work',
})
const list = ref([
  {
    title: '前端开发',
    content: '前端开发',
  },
  {
    title: '后端开发',
    content: '后端开发',
  },
  {
    title: '小程序开发',
    content: '小程序开发',
  },
])
// 测试 uni API 自动引入
onLoad(() => {
  uni.showToast({
    title: '加载中',
    icon: 'loading',
  })
})
</script>
