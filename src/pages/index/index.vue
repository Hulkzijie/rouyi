<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: "custom",
    navigationBarTitleText: "首页",
  },
}
</route>
<template>
  <view class="h-100vh bg-#F7F7F7 mt-44px p-2">
    <wd-navbar
      fixed
      custom-style="background-color: #AA001E !important;color:#FFFFFF"
      left-arrow
      safeAreaInsetTop
    >
      <template #title>
        <wd-text text="今世缘综合管理平台" color="#FFFFFF"></wd-text>
      </template>
      <template #right>
        <wd-icon name="notification" size="18px"></wd-icon>
      </template>
      <template #left>
        <wd-icon name="calendar" size="18px"></wd-icon>
      </template>
    </wd-navbar>
    <wd-swiper
      :list="swiperList"
      autoplay
      v-model:current="current"
      @click="handleClick"
      @change="onChange"
    >
    </wd-swiper>
    <wd-notice-bar
      background-color="#F7F7F7"
      color="#999999"
      text="园区也“智慧”,业务更“流畅”"
    >
      <template #prefix>
        <wd-icon name="sound" color="#AA001E" size="16"></wd-icon>
      </template>
    </wd-notice-bar>
    <wd-card class="customWdCardWapper">
      <view v-for="(item,index) in indexCommon" :key="index" class="cardItem" >
        <view :style="{height:'72px',width:'72px',borderRadius:'4px',background:`${item.color}`}" >
          {{ item.title }}
        </view>
      </view>
    </wd-card>
    <wd-card v-for="(item, index) in indexCardList" :key="index">
      <template #title>
        <uni-section :title="item.title" type="line" padding titleFontSize="16">
          <wd-grid :column="4">
            <view v-for="(sup, index) in item.content" :key="index">
              <wd-grid-item
                custom-class="custom-item"
                use-icon-slot
                use-text-slot
                @click="handlerGridItemClick(sup)"
              >
                <template #icon>
                  <image
                    class="slot-img"
                    src="https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg"
                  />
                </template>
                <template #text>
                  <view class="text">{{ sup.title }}</view>
                </template>
              </wd-grid-item>
            </view>
          </wd-grid>
        </uni-section>
      </template>
    </wd-card>
  </view>
</template>

<script lang="ts" setup>
import { TestEnum } from "@/typings";
import PLATFORM from "@/utils/platform";

defineOptions({
  name: "Home",
});
const current = ref(0);
const handleClick = () => {
  console.log("点击了轮播图");
};
const onChange = (e: any) => {
  // console.log(e)
};
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();
console.log("safeAreaInsets", safeAreaInsets);
const author = ref("菲鸽");
const swiperList = ref([
  "https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg",
  "https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg",
  "https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg",
  "https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg",
  "https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg",
]);
const indexCommon = [
  {
    title: "邀约",
    color:'#f77',
    url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAhFBMVEUAAAAHuNYHuNYKudcHuNYIudcIudcRu9gbvdkHuNYHuNYHuNYHuNYHuNZNy+AbvdkHuNZNy+BNy+BNy+AVvNg1xN0HuNYVvNgHuNZNy+AVvNgKudcQu9gNutcev9pIyt8pwtsiwNo0xd1Gyd8vw9w7xt4lwdsYvdlCyN8/x94avtk4xt3R/v+8AAAAGHRSTlMA+u3lmKx4HBPTh7NXN5gKluyzWdKIODfuhBLnAAAEjUlEQVR42uzU20rDUBSE4dk7zbmhvRwPYDCtkr7/A4ooSqJzVdqsi/me4IdZLCwNVdnmxDtIuS2rAVLdFbyzoqvxn+aYuIF0bPDHPnMjeY+VHTe0W6Qcem6qP+BXz431QTZaLbVnAN9X3GQGkJsoI/0MVSeGkGoAHYPoABQMogAGhjGgYhgVSoZRomUYLUJ8vC8ZQb7MpwQG4hjHOMYxK45RHKM4RnGM4hjFMYpjFMcojlEcozhGcYziGMUximMUxyiOURyjOEZxzHWeLuPpdZ6maZ7Pp7fLMzXwph7H88vD0jy+UwBv6KOX81xiG4QBsLvXdS8kgQ2eOH7/9+s6rBqUOm1Ev19JjiSfkXBAOQgriAzzsevmcVqnfvT1ZGgc4CrcbOm5WTWZ8AeVzu8qGzC1ZHACmdjPF+v2zgOoL9NeMRnR/IaN8B9kvKwS6Nh7HdSXITlEI5ncpb4MrWLOtiYjQn0ZG8UQWZMxQsGsLbMMIDAs6I5RcoKLUZZpQY4R/sAZpoec1ijLhD+5IHJDFFyUZWYQCYjHniHbly7KMh5EekS0jojzBXEtxpqyzAYiEe0hdwkRlzzBra4MrSATsnb4nVCkVdCUoQgyHZUuOEPBrCdjI9wmgyyT4bVklg6Y8pIZhz/xINo0tW51TFt0DAaQ2Jpqtxdm5GjiLy4g0tR3YRvCxFBJxsM5fcqYRF9JJsLNNhYToY6MbbubbTBxiVVkLOJtNhtxyrRDlQTmzz4FDXGMKshQ6vXcZuqk+Tjx7VdfhjCxTMcvLi/e7+09qMuwSzlWfXn5fn+DhxoyDg/02cQudJnLd9hFUYZdSpsupERaiykNu+jKOCwY0+SbEylbv7kRqshYLPEAQ4vI/LQZ8M+/HHG4W4ZQoJ0XxMwmOmmtxGy4zOO2xiGuW2MUbUq8P3Hp96AiYmPq2pBJTCAwIsMy/wJmWCxwZy5qMsZmX0x/6TKjooxxWUDoigutt7i4xijZECdS4eLi9XIAQ6YxOjZUho5fGm5zYZn7bKhMJOJF1Q0uTmd5SweXZMMvXeDUxTqjtfAnEgbZ9fpR+okgZy2itZbf35gKkPuzy4pGpDE1kV0mZ2T0ZQjbeZ7Dxf6ti7qMC9s+jqMfQaAnw/BjdRn02Sg+c/Hdag1TbNCrveqmrBjccTI/0Nu6aKd/cQHoLun5Q7VNnUsH54yly3eSzQut7a4If+uyAWQ2T5Q2ArsBzvFX/5RazA+eNl+MBhucE+TqKPfNa53N4y2c0gXD4CBUIR8pbas/D9JwMb/RSTXRlzoHDgQ4JZzKj8+a77wz90Fu/TsZJxa73mgcUuFwgXOm43SnTLL3z+8/voMsoodzOnecCLZ5b368/2ATSuWHUzCbIi9rHqTEq3tccDtmh+x2YReh9PZB4TCcvdbAtFd6qk0uzMQub+8/JsgW9bzYct2ulCE8sqUYKRygROkz2WW5WulduH1m8/5jU/D88d/e/Yra4rrsZaMIGTa1z23ePNc4dMshHqvMU1FuZAYSZR59ftYwdxxHZvdxUbp4yOjzlFkefXry9Gtz4BsyZC34prhe8AAAAABJRU5ErkJggg=='
  },
  {
    title: "门岗核验",
    color:'#333',
    url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAhFBMVEUAAAAHuNYHuNYKudcHuNYIudcIudcRu9gbvdkHuNYHuNYHuNYHuNYHuNZNy+AbvdkHuNZNy+BNy+BNy+AVvNg1xN0HuNYVvNgHuNZNy+AVvNgKudcQu9gNutcev9pIyt8pwtsiwNo0xd1Gyd8vw9w7xt4lwdsYvdlCyN8/x94avtk4xt3R/v+8AAAAGHRSTlMA+u3lmKx4HBPTh7NXN5gKluyzWdKIODfuhBLnAAAEjUlEQVR42uzU20rDUBSE4dk7zbmhvRwPYDCtkr7/A4ooSqJzVdqsi/me4IdZLCwNVdnmxDtIuS2rAVLdFbyzoqvxn+aYuIF0bPDHPnMjeY+VHTe0W6Qcem6qP+BXz431QTZaLbVnAN9X3GQGkJsoI/0MVSeGkGoAHYPoABQMogAGhjGgYhgVSoZRomUYLUJ8vC8ZQb7MpwQG4hjHOMYxK45RHKM4RnGM4hjFMYpjFMcojlEcozhGcYziGMUximMUxyiOURyjOEZxzHWeLuPpdZ6maZ7Pp7fLMzXwph7H88vD0jy+UwBv6KOX81xiG4QBsLvXdS8kgQ2eOH7/9+s6rBqUOm1Ev19JjiSfkXBAOQgriAzzsevmcVqnfvT1ZGgc4CrcbOm5WTWZ8AeVzu8qGzC1ZHACmdjPF+v2zgOoL9NeMRnR/IaN8B9kvKwS6Nh7HdSXITlEI5ncpb4MrWLOtiYjQn0ZG8UQWZMxQsGsLbMMIDAs6I5RcoKLUZZpQY4R/sAZpoec1ijLhD+5IHJDFFyUZWYQCYjHniHbly7KMh5EekS0jojzBXEtxpqyzAYiEe0hdwkRlzzBra4MrSATsnb4nVCkVdCUoQgyHZUuOEPBrCdjI9wmgyyT4bVklg6Y8pIZhz/xINo0tW51TFt0DAaQ2Jpqtxdm5GjiLy4g0tR3YRvCxFBJxsM5fcqYRF9JJsLNNhYToY6MbbubbTBxiVVkLOJtNhtxyrRDlQTmzz4FDXGMKshQ6vXcZuqk+Tjx7VdfhjCxTMcvLi/e7+09qMuwSzlWfXn5fn+DhxoyDg/02cQudJnLd9hFUYZdSpsupERaiykNu+jKOCwY0+SbEylbv7kRqshYLPEAQ4vI/LQZ8M+/HHG4W4ZQoJ0XxMwmOmmtxGy4zOO2xiGuW2MUbUq8P3Hp96AiYmPq2pBJTCAwIsMy/wJmWCxwZy5qMsZmX0x/6TKjooxxWUDoigutt7i4xijZECdS4eLi9XIAQ6YxOjZUho5fGm5zYZn7bKhMJOJF1Q0uTmd5SweXZMMvXeDUxTqjtfAnEgbZ9fpR+okgZy2itZbf35gKkPuzy4pGpDE1kV0mZ2T0ZQjbeZ7Dxf6ti7qMC9s+jqMfQaAnw/BjdRn02Sg+c/Hdag1TbNCrveqmrBjccTI/0Nu6aKd/cQHoLun5Q7VNnUsH54yly3eSzQut7a4If+uyAWQ2T5Q2ArsBzvFX/5RazA+eNl+MBhucE+TqKPfNa53N4y2c0gXD4CBUIR8pbas/D9JwMb/RSTXRlzoHDgQ4JZzKj8+a77wz90Fu/TsZJxa73mgcUuFwgXOm43SnTLL3z+8/voMsoodzOnecCLZ5b368/2ATSuWHUzCbIi9rHqTEq3tccDtmh+x2YReh9PZB4TCcvdbAtFd6qk0uzMQub+8/JsgW9bzYct2ulCE8sqUYKRygROkz2WW5WulduH1m8/5jU/D88d/e/Yra4rrsZaMIGTa1z23ePNc4dMshHqvMU1FuZAYSZR59ftYwdxxHZvdxUbp4yOjzlFkefXry9Gtz4BsyZC34prhe8AAAAABJRU5ErkJggg=='
  },
  {
    title: "更多服务",
    color:'#f45',
    url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAhFBMVEUAAAAHuNYHuNYKudcHuNYIudcIudcRu9gbvdkHuNYHuNYHuNYHuNYHuNZNy+AbvdkHuNZNy+BNy+BNy+AVvNg1xN0HuNYVvNgHuNZNy+AVvNgKudcQu9gNutcev9pIyt8pwtsiwNo0xd1Gyd8vw9w7xt4lwdsYvdlCyN8/x94avtk4xt3R/v+8AAAAGHRSTlMA+u3lmKx4HBPTh7NXN5gKluyzWdKIODfuhBLnAAAEjUlEQVR42uzU20rDUBSE4dk7zbmhvRwPYDCtkr7/A4ooSqJzVdqsi/me4IdZLCwNVdnmxDtIuS2rAVLdFbyzoqvxn+aYuIF0bPDHPnMjeY+VHTe0W6Qcem6qP+BXz431QTZaLbVnAN9X3GQGkJsoI/0MVSeGkGoAHYPoABQMogAGhjGgYhgVSoZRomUYLUJ8vC8ZQb7MpwQG4hjHOMYxK45RHKM4RnGM4hjFMYpjFMcojlEcozhGcYziGMUximMUxyiOURyjOEZxzHWeLuPpdZ6maZ7Pp7fLMzXwph7H88vD0jy+UwBv6KOX81xiG4QBsLvXdS8kgQ2eOH7/9+s6rBqUOm1Ev19JjiSfkXBAOQgriAzzsevmcVqnfvT1ZGgc4CrcbOm5WTWZ8AeVzu8qGzC1ZHACmdjPF+v2zgOoL9NeMRnR/IaN8B9kvKwS6Nh7HdSXITlEI5ncpb4MrWLOtiYjQn0ZG8UQWZMxQsGsLbMMIDAs6I5RcoKLUZZpQY4R/sAZpoec1ijLhD+5IHJDFFyUZWYQCYjHniHbly7KMh5EekS0jojzBXEtxpqyzAYiEe0hdwkRlzzBra4MrSATsnb4nVCkVdCUoQgyHZUuOEPBrCdjI9wmgyyT4bVklg6Y8pIZhz/xINo0tW51TFt0DAaQ2Jpqtxdm5GjiLy4g0tR3YRvCxFBJxsM5fcqYRF9JJsLNNhYToY6MbbubbTBxiVVkLOJtNhtxyrRDlQTmzz4FDXGMKshQ6vXcZuqk+Tjx7VdfhjCxTMcvLi/e7+09qMuwSzlWfXn5fn+DhxoyDg/02cQudJnLd9hFUYZdSpsupERaiykNu+jKOCwY0+SbEylbv7kRqshYLPEAQ4vI/LQZ8M+/HHG4W4ZQoJ0XxMwmOmmtxGy4zOO2xiGuW2MUbUq8P3Hp96AiYmPq2pBJTCAwIsMy/wJmWCxwZy5qMsZmX0x/6TKjooxxWUDoigutt7i4xijZECdS4eLi9XIAQ6YxOjZUho5fGm5zYZn7bKhMJOJF1Q0uTmd5SweXZMMvXeDUxTqjtfAnEgbZ9fpR+okgZy2itZbf35gKkPuzy4pGpDE1kV0mZ2T0ZQjbeZ7Dxf6ti7qMC9s+jqMfQaAnw/BjdRn02Sg+c/Hdag1TbNCrveqmrBjccTI/0Nu6aKd/cQHoLun5Q7VNnUsH54yly3eSzQut7a4If+uyAWQ2T5Q2ArsBzvFX/5RazA+eNl+MBhucE+TqKPfNa53N4y2c0gXD4CBUIR8pbas/D9JwMb/RSTXRlzoHDgQ4JZzKj8+a77wz90Fu/TsZJxa73mgcUuFwgXOm43SnTLL3z+8/voMsoodzOnecCLZ5b368/2ATSuWHUzCbIi9rHqTEq3tccDtmh+x2YReh9PZB4TCcvdbAtFd6qk0uzMQub+8/JsgW9bzYct2ulCE8sqUYKRygROkz2WW5WulduH1m8/5jU/D88d/e/Yra4rrsZaMIGTa1z23ePNc4dMshHqvMU1FuZAYSZR59ftYwdxxHZvdxUbp4yOjzlFkefXry9Gtz4BsyZC34prhe8AAAAABJRU5ErkJggg=='
  },
];
const indexCardList = ref([
  {
    title: "待办",
    content: [
      {
        title: "预约列表",
        count: "1", // 属性名修改为 count
        path:'pages/car/productionvehicles/index'
      },
      {
        title: "作业记录",
        count: "3", // 属性名修改为 count
       
      },
      {
        title: "我的告警",
        count: "5", // 属性名修改为 count
         
      },
      {
        title: "我的作业",
        count: "5", // 属性名修改为 count
         
      },
    ],
  },
  {
    title: "用车申请",
    content: [
      {
        title: "园区用车",
        count: "2", // 属性名修改为 count
    
      },
      {
        title: "生产用车",
        count: "2", // 属性名修改为 count
   
      },
    ],
  },
]);
const handlerGridItemClick = (item: any) => {
  console.log('-22-',item);
  goDetailPage(item.path)
};
const goDetailPage = (path: string) => {
  const url = `/${path}`
  uni.navigateTo({
    url,
  })
}
// 测试 uni API 自动引入
onLoad(() => {
  console.log(author);
  console.log(TestEnum.A);
  console.log(`当前平台是:${PLATFORM.platform}`);
});
</script>

<style scoped>
:deep(.wd-card__title-content) {
  padding: 0 !important;
}
:deep(.wd-card__footer) {
  padding: 0 !important;
}
:deep(.uni-section-header__decoration) {
  background-color: #aa001e !important;
}
:deep(.uni-section-content) {
  padding: 0 !important;
}
:deep(.wd-card) {
  padding: 0 !important;
}
:deep(.custom-item) {
  color: #333333;
  font-size: 14px !important;
}
.slot-img {
  height: 24px;
  width: 24px;
  /* border-radius: 4px; */
}
.text {
  color: #333333;
  margin-top:12px;
}

 :deep(.wd-card__content){
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
 }
</style>
<style lang="scss" scoped>
.customWdCardWapper{
 height: 96px;
    .cardItem{
      width: 33%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      color: #ffffff;
      font-size: 14px;
      // background-image: url(../../static/images/wofaqide.png);
    }
 }
</style>