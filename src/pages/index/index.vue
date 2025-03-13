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
  <view class="h-100vh bg-#F7F7F7 mt-44px p-0">
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
    <uv-swiper :list="swiperList" radius="0" height="225"></uv-swiper>
    <!-- <wd-swiper
      :list="swiperList"
      autoplay
      v-model:current="current"
      @click="handleClick"
      @change="onChange"
    >
    </wd-swiper> -->
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
      <view v-for="(item, index) in indexCommon" :key="index" class="cardItem">
        <view
          :style="{
            boxSizing: 'border-box',
            backgroundSize: '100% !important',
            padding: '13px 0 0 9px',
            height: '72px',
            width: '72px',
            borderRadius: '4px',
            'background-image': `url(${item.bgImage})`,
          }"
        >
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
                  <image class="slot-img" :src="sup.icon" />
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
import wofaqide from "@/static/images/wofaqide.png";
import tuihuoliebiao from "@/static/images/tuihuoliebiao.png";
import gongyingjilu from "@/static/images/gongyingjilu.png";
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
    color: "#f77",
    bgImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAhFBMVEUAAAAHuNYHuNYKudcHuNYIudcIudcRu9gbvdkHuNYHuNYHuNYHuNYHuNZNy+AbvdkHuNZNy+BNy+BNy+AVvNg1xN0HuNYVvNgHuNZNy+AVvNgKudcQu9gNutcev9pIyt8pwtsiwNo0xd1Gyd8vw9w7xt4lwdsYvdlCyN8/x94avtk4xt3R/v+8AAAAGHRSTlMA+u3lmKx4HBPTh7NXN5gKluyzWdKIODfuhBLnAAAEjUlEQVR42uzU20rDUBSE4dk7zbmhvRwPYDCtkr7/A4ooSqJzVdqsi/me4IdZLCwNVdnmxDtIuS2rAVLdFbyzoqvxn+aYuIF0bPDHPnMjeY+VHTe0W6Qcem6qP+BXz431QTZaLbVnAN9X3GQGkJsoI/0MVSeGkGoAHYPoABQMogAGhjGgYhgVSoZRomUYLUJ8vC8ZQb7MpwQG4hjHOMYxK45RHKM4RnGM4hjFMYpjFMcojlEcozhGcYziGMUximMUxyiOURyjOEZxzHWeLuPpdZ6maZ7Pp7fLMzXwph7H88vD0jy+UwBv6KOX81xiG4QBsLvXdS8kgQ2eOH7/9+s6rBqUOm1Ev19JjiSfkXBAOQgriAzzsevmcVqnfvT1ZGgc4CrcbOm5WTWZ8AeVzu8qGzC1ZHACmdjPF+v2zgOoL9NeMRnR/IaN8B9kvKwS6Nh7HdSXITlEI5ncpb4MrWLOtiYjQn0ZG8UQWZMxQsGsLbMMIDAs6I5RcoKLUZZpQY4R/sAZpoec1ijLhD+5IHJDFFyUZWYQCYjHniHbly7KMh5EekS0jojzBXEtxpqyzAYiEe0hdwkRlzzBra4MrSATsnb4nVCkVdCUoQgyHZUuOEPBrCdjI9wmgyyT4bVklg6Y8pIZhz/xINo0tW51TFt0DAaQ2Jpqtxdm5GjiLy4g0tR3YRvCxFBJxsM5fcqYRF9JJsLNNhYToY6MbbubbTBxiVVkLOJtNhtxyrRDlQTmzz4FDXGMKshQ6vXcZuqk+Tjx7VdfhjCxTMcvLi/e7+09qMuwSzlWfXn5fn+DhxoyDg/02cQudJnLd9hFUYZdSpsupERaiykNu+jKOCwY0+SbEylbv7kRqshYLPEAQ4vI/LQZ8M+/HHG4W4ZQoJ0XxMwmOmmtxGy4zOO2xiGuW2MUbUq8P3Hp96AiYmPq2pBJTCAwIsMy/wJmWCxwZy5qMsZmX0x/6TKjooxxWUDoigutt7i4xijZECdS4eLi9XIAQ6YxOjZUho5fGm5zYZn7bKhMJOJF1Q0uTmd5SweXZMMvXeDUxTqjtfAnEgbZ9fpR+okgZy2itZbf35gKkPuzy4pGpDE1kV0mZ2T0ZQjbeZ7Dxf6ti7qMC9s+jqMfQaAnw/BjdRn02Sg+c/Hdag1TbNCrveqmrBjccTI/0Nu6aKd/cQHoLun5Q7VNnUsH54yly3eSzQut7a4If+uyAWQ2T5Q2ArsBzvFX/5RazA+eNl+MBhucE+TqKPfNa53N4y2c0gXD4CBUIR8pbas/D9JwMb/RSTXRlzoHDgQ4JZzKj8+a77wz90Fu/TsZJxa73mgcUuFwgXOm43SnTLL3z+8/voMsoodzOnecCLZ5b368/2ATSuWHUzCbIi9rHqTEq3tccDtmh+x2YReh9PZB4TCcvdbAtFd6qk0uzMQub+8/JsgW9bzYct2ulCE8sqUYKRygROkz2WW5WulduH1m8/5jU/D88d/e/Yra4rrsZaMIGTa1z23ePNc4dMshHqvMU1FuZAYSZR59ftYwdxxHZvdxUbp4yOjzlFkefXry9Gtz4BsyZC34prhe8AAAAABJRU5ErkJggg==",
  },
  {
    title: "门岗核验",
    color: "#333",
    bgImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAllBMVEUAAABhuvlhuvlnvflrvvliu/liu/lhuvliu/lhuvlhuvlhuvluv/lhuvliu/mJyvlhuvmJyvmJyvlhuvlhuvmJyvmGyfmJyvlhuvmBx/mJyvmJyvmJyvlju/mJyvlhuvmJyvlpvfl8xflkvPmCx/l/xvl5xPlovfl3w/mHyflmvPliu/mFyPlxwPlrvvmEyPl0wvluv/lKnPhmAAAAH3RSTlMA+u03E+OsloezeFcImOyYHPrs09Kx01keHO7jh3l4FflS0AAAA9xJREFUeNrs1EsKwkAQhOGayTvRIOjCXYEbV97/eiIEH9HaZhqp7wQ/NNX4VI3tKSduIOVTO1aQDn3DjTX9Ab/UXWIBqavxZZpZyDxhpWNBHd7tBhY17PAysLABT3sWt8diYgDTsumZAeS6/JBWhzonhpDOAHoG0QNoGEQDVAyjwsgwRrQMo8WRYRyRGUZGkC/zkMBAHOMYxzhmxTGKYxTHKI5RHKM4RnGM4hjFMYpjFMcojlEcozhGcYziGMUximMUxyiOUf445nq73Ju51562YSgMwNlgaNKGOpAAsdvx8SVO7DqX///n1rpVfdpi0pKjxe9XUHlw+h77S1wGBoPUQogyMGEjKQYDQ0kYGErCQGgLwoAuB+NlOY9JmXK+M64vpk2+68uYM145G1qxPGYLQcSNpQCMwm0GIUrARE2TLGZRDChqkciP6Yahg0tDLDUyYujHS3u1pUF2jJcipg0X/TK1sGOcTt9GhIkonSwDsmNsK0iaCUtPLeyYLlpSNF5maQPGSEZMEGepVXYRk6Uf7c4iKs4anWcdJhex7yyoaKEYfku25UFQS5x+RrBhlKR/fhAx2ZaTn2t03Icrp49L1BnKkZi1GHT0cMVd6fDWU2sylhrjNxxbwYYZiWWEfdBkWt4QY7JwYQZSni5jTIsjTyy0WRVnjXRn/emRn4wTAPD6zDIyHq6QWHATB2CMenNxpPJ0C0gWNkxNShOzbVI7wi6qpppek8LvF7HhxMi06jFjv5M52GVMAMoaLQA7RjXHlnD41wefn81x7Ma4mg/jEDU9BAxvDZfR5C3IgEkW7Op1K0d0XiEeLUJN2t8KEt052MaDQz6MxUMUOUZSDG358RaAUllkw/gTC0QLbTKQDO3pFtAismE8HlucEScY3LZXhv0D7czJFqD5MCpRrE9DnWKi0sQVcrFpZm1C2gL4MNQSP50yEgatiQMOD0ljlw3jTyxBZDC7zVuHI8sgWDHuYHFprmUwMXV6oNAIfgyt0SRG6KbbL6IWzBiVGS8ZTExrmtDUvRDcGLAHC/ZiApMJZ7WtdbTS52kUM2Y6a5HFALiSMKD+L6Z/FwNwFebTLIq36wmMvBzzUH2eZUHMY+prMY+zXupU+B5GOn8d5rm6m2N5H4OorsI8zXgR2OEkBq0yl2P+VjezLBHDNYFvPvryuLfIjfn10dfqPSI75vcG8+Mjk8byYx5e41UMZWBW1Ta3n0vAPN5WMd9KwLxU+9wvj1mR62eWxjx9r4hmSUy00NwviVllLlBaAPP4krlaagHM6nbGpVusmC9fXwngwuvI+DEPP5/v/txUR/kHr0g5zJUzmYUAAAAASUVORK5CYII=",
  },
  {
    title: "更多服务",
    color: "#f45",
    bgImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAeFBMVEUAAAA0aaM0aaM0aaM0aaM1aqQ5baY0aaM0aaM0aaM0aaM0aaM0aaM0aaM2aqQ1aqQ0aaNUgbM5baVdiLddiLddiLc0aaM0aaNdiLc8b6c2a6RBc6lIeK06baY4bKVDdKpKeq5YhLVPfbBVgrM+cKhFdqxSgLJMe6+RjnsyAAAAF3RSTlMAl/rt47M3HBPTrHmHVwpZiOzr06x4VkkSZpUAAAMsSURBVHja7NRLDsIwEINhN+k7adnh+98UIRCPgrfNLPyd4JesGXwby7rkxBOkvKxlhDTVnifr64R/5i6xgdTN+HHNbCRvOOjYUIdP+8Cmhh1vAxsbgmx0WGpjAJfnTWcGkOcoI72GmhJDSBOAyiAqgJ5B9MDIMEYUhlGwMowVC8NYEOLjPWQE+TJ3CQzEMY5xjGMOHKM4RnGM4hjFMYpjFMcojlEcozhGcYziGMUximMUxyiOURyjOEZxjOIYxTG3du5st20YiMJwFqcuirZJN3DOiKREUsv7v2HTVnJiWYzEcgjrIv+d4bn44B0WOLHeMbH2j6ka5+hvLmio1VodaCzIYlgHOquvUuZFMVWgi3qjotWOqBRmoMX0+rw8pqdIeuv8jaAl2hCZL4Xhnt6oURd5Kofx9Ga1mtVQOUxFK7E6q6VyGKa1vDorFMRoWq2NPJDiGEPrDeol64ph2HS0nuPTPGoqhbGAJ9r+PBlgKIUxAAJtqHmZdzGMgAW0pf40X1EZjMFmjONpvi6DMUjDWJTDMBIwZKf5rggGSRgzPZC6BMYmYhgFMUjEmIIYTsQABTEWU4G21JbEGEwNtKWqJAan6j1hEPaE6faEQdgTptoTBs2eMPB7wsBfFWNw3nBNjMUsfUUMY17lr4ZRBgscdyUMY6G288G5/8C4fsjBKINIbXUKZmx276y2BZCFYazHCcNZGGX3hFFWEsOZGGXlMFblYpSVwrDEtQMrgjGsRkwuJx9jlRLCKLZZGGPHIakDemyNwVhbd52eqqe6FmOVflXX1X+qWtg72aOLzNzq4Ggx8FhHi7lvwoc6u56iGTVW03I/bj4JX2/KwPyUPAjcEGVhfgkekfaUggm6ed3ge/ogd3i8pySMVvMOcsfqPaVhGjXvs9jCgYFyMXdHqVUMFWVjbsWWVDiKFP3QG8Ybauz+o9T6jjr9LxE/+2Z6lFpsYl0GBoBhdSu08oVNTXkY4EFoGY4FfC7m4avMmiADwG3GGPvcvxewfW783XF7M+vLvdz1pjjGXr61+fuj0Gopg1zMtFpq3vHpkPx6ycQcno5nhIx1ZIwMzMI6st9M8t6ZJn4ZfAAAAABJRU5ErkJggg==",
  },
];
const indexCardList = ref([
  {
    title: "待办",
    content: [
      {
        title: "预约列表",
        count: "1", // 属性名修改为 count/static/images/
        path: "pages/car/productionvehicles/index",
        icon: wofaqide,
      },
      {
        title: "作业记录",
        count: "3", // 属性名修改为 count
        icon: tuihuoliebiao,
      },
      {
        title: "我的告警",
        count: "5", // 属性名修改为 count
        icon: tuihuoliebiao,
      },
      {
        title: "我的作业",
        count: "5", // 属性名修改为 count
        icon: gongyingjilu,
      },
    ],
  },
  {
    title: "用车申请",
    content: [
      {
        title: "园区用车",
        count: "2", // 属性名修改为 count
        icon: gongyingjilu,
      },
      {
        title: "生产用车",
        count: "2", // 属性名修改为 count
        icon: gongyingjilu,
      },
    ],
  },
]);
const handlerGridItemClick = (item: any) => {
  console.log("-22-", item);
  goDetailPage(item.path);
};
const goDetailPage = (path: string) => {
  const url = `/${path}`;
  uni.navigateTo({
    url,
  });
};
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
  margin-top: 12px;
}

:deep(.wd-card__content) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 50px;
}
</style>
<style lang="scss" scoped>
.customWdCardWapper {
  height: 96px;
  .cardItem {
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: #ffffff;
    font-size: 14px;
  }
}
</style>
