<route lang="json5">
{
  style: {
    navigationStyle: "custom",
    navigationBarTitleText: "我的",
  },
}
</route>
<template>
  <view class="mine-container topBgBox">
    <!--顶部个人信息栏-->
    <view class="header-section">
      <view class="top-box">
        <view class="title-box">
          <view
            v-if="!avatar"
            @click="handleToAvatar"
            class="avatarImg bg-white"
          >
            <view class="iconfont icon-people text-gray icon"></view>
          </view>
          <image
            v-else
            @click="handleToAvatar"
            :src="avatar"
            class="avatarImg"
            mode="widthFix"
          ></image>
          <view v-if="!name" @click="handleToLogin" class="login-tip"
            >点击登录</view
          >
          <view v-if="name" @click="handleToInfo" class="user-info">
            <view class="u_title">
              {{ name }}
            </view>
            <view class="sub_title">
              {{ deptName }}
            </view>
          </view>
        </view>
      </view>
      <view class="woker-list">
        <view
          v-for="(item, index) in wokerList"
          :key="index"
          class="woker-list-item"
        >
          <view>
            <!-- <text class="woker-list__name">{{ item.name }}</text>
            <text class="woker-list__number">{{ item.number }}</text> -->
          </view>

          <text v-if="index == 0" class="decollator">/</text>
        </view>
      </view>
    </view>
    <view class="bgCard">
      <!-- <scroll-view scroll-y="true"> -->
      <view class="content-section">
        <view class="menu-list">
          <view
            class="list-cell list-cell-arrow message-box"
            @click="handleMessageCenter"
          >
            <view class="menu-item-box">
              <!-- <view class="iconfont icon-community menu-icon"></view> -->
              <!-- <u--image
                class="menuListIcon"
                :src="globalConfig.iconImgPrefix + 'xiaoxizhongxin.png'"
              ></u--image> -->
              <view class="menuTitle">消息中心</view>
            </view>
            <!-- <u-badge type="error" max="99" :value="unreadNum"></u-badge> -->
          </view>
          <!-- <view class="list-cell list-cell-arrow" @click="handleToAddressBook">
						<view class="menu-item-box">
							<u--image class="menuListIcon" :src="globalConfig.iconImgPrefix + 'tongxunlu.png'"></u--image>
							<view class="menuTitle">通讯录</view>
						</view>
					</view> -->
          <view class="list-cell list-cell-arrow" @click="handleToEditInfo">
            <view class="menu-item-box">
              <!-- <view class="iconfont icon-edit menu-icon"></view> -->
              <!-- <u--image
                class="menuListIcon"
                :src="globalConfig.iconImgPrefix + 'xiugaiziliao.png'"
              ></u--image> -->
              <view class="menuTitle">修改资料</view>
            </view>
          </view>
          <view class="list-cell list-cell-arrow" @click="handleToPwd">
            <view class="menu-item-box">
              <!-- <view class="iconfont icon-password menu-icon"></view> -->
              <!-- <u--image
                class="menuListIcon pwIcon"
                :src="globalConfig.iconImgPrefix + 'xiugaimima.png'"
              ></u--image> -->
              <view class="menuTitle">修改密码</view>
            </view>
          </view>
          <view class="list-cell list-cell-arrow" @click="handleVersion">
            <view class="menu-item-box">
              <!-- <view class="iconfont icon-version menu-icon"></view> -->
              <!-- <wd-img
                class="menuListIcon"
                :src="globalConfig.iconImgPrefix + 'banbenxinxi.png'"
              ></wd-img> -->
              <view class="menuTitle">版本信息</view>
            </view>
          </view>
          <view class="list-cell list-cell-arrow" @click="handleAbout">
            <view class="menu-item-box">
              <view class="iconfont icon-aixin menu-icon"></view>
              <view>关于我们</view>
            </view>
          </view>
          <!-- <view class="list-cell list-cell-arrow" @click="handleLogout">
					<view class="menu-item-box">
						<view class="iconfont icon-setting menu-icon"></view>
						<view>注销账号</view>
					</view>
				</view> -->
        </view>
        <view class="action-btn">
          <wd-button
            size="large"
            block
            @click="handleQuit"
            custom-class="customBtn"
            >退出当前账号</wd-button
          >
        </view>
      </view>
    </view>
    <!-- </scroll-view> -->
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from '../../store/user'
import {  logout } from "../../service/index/login";
const userStore = useUserStore()

const avatar = ref("");
const name = ref("");
const deptName = ref("");
const wokerList = ref([]);
const unreadNum = ref(0);

const handleToAvatar = () => {
  // this.$tab.navigateTo('/pages/mine/avatar/index');
};

const handleToLogin = () => {
  // uni.navigateTo({
  //     url: '/pages/login/index'
  // })
};

const handleToInfo = () => {
  // 处理用户信息点击
};

const handleMessageCenter = () => {
  // 处理消息中心点击
};

const handleToEditInfo = () => {
  // 处理修改资料点击
};

const handleToPwd = () => {
  // 处理修改密码点击
};

const handleVersion = () => {
  // 处理版本信息点击
};

const handleAbout = () => {
  // 处理关于我们点击
};

const handleQuit = async () => {
  // 处理退出账号点击
 userStore.logout()
};
</script>
<style lang="scss" scoped>
 .action-btn {
      margin-top: 80rpx;
      .customBtn {
        background: #AA001E !important;
      }
    }
</style>
