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
          <text class="woker-list__name">{{ item.name }}</text>
            <text class="woker-list__number">{{ item.number }}</text>         
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
              <view class="iconfont icon-my"></view>
              <wd-img
                class="menuListIcon"
                :src="xiaoxizhongxin"
              ></wd-img>
              <view class="menuTitle">消息中心</view>
            </view>
             <wd-badge :modelValue="unreadNum" type="primary"></wd-badge> 
          </view>
          <view class="list-cell list-cell-arrow">
						<view class="menu-item-box">
							<wd-img class="menuListIcon" :src="xiaoxizhongxin"></wd-img>
							<view class="menuTitle">通讯录</view>
						</view>
					</view>  
          <view class="list-cell list-cell-arrow" @click="handleToEditInfo">
            <view class="menu-item-box">
              <view class="iconfont icon-edit menu-icon"></view> 
              <!-- <u--image
                class="menuListIcon"
                :src="globalConfig.iconImgPrefix + 'xiugaiziliao.png'"
              ></u--image> -->
              <view class="menuTitle">修改资料</view>
            </view>
          </view>
          <view class="list-cell list-cell-arrow" @click="handleToPwd">
            <view class="menu-item-box">
           <view class="iconfont icon-password menu-icon"></view> 
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
              <view class="iconfont icon-chat"></view>
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
import xiaoxizhongxin from "@/static/images/xiaoxizhongxin.png"
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
        background:uni-color-primary !important;
      }
    }
  /*我的样式开始*/
.mine-container {
	display: flex;
	flex-direction: column;
	height: 100%;
	.header-section {
		.top-box {
			margin-bottom: 52rpx;
			.title-box {
				display: flex;
				align-items: center;
				margin-top: 108rpx;
				margin-left: 60rpx;
				.avatarImg {
					width: 128rpx;
					height: 128rpx;
					border-radius: 50%;
					box-shadow: 0px 0px 20px 0px rgba(0, 0, 1, 0.3);
					background: #fff;
				}
				.login-tip,
				.user-info {
					color: #fff;
					margin-left: 46rpx;
				}
				.u_title {
					font-size: 20px;
					line-height: 20px;
				}
				.sub_title {
					margin-top: 9px;
					font-size: $uni-font-size-base;
					line-height: $uni-font-size-base;
					color: #ccc;
				}
			}
		}
		.woker-list {
			display: flex;
			padding: 0 60rpx;
			margin-bottom: 14rpx;
			.woker-list-item {
				flex: 1;
				display: flex;
				justify-content: space-between;
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
				line-height: $uni-font-size-base;
				&:last-child {
					justify-content: flex-end;
				}
				.woker-list__name {
					margin-right: 32rpx;
				}
				.decollator {
					font-size: 18px;
				}
			}
		}
	}

	.content-section {
		.menu-list {
			margin: 40rpx 0;
			.list-cell {
				display: flex;
				&:last-child {
					&::after {
						height: 0;
					}
				}
				.menu-item-box {
					.pwIcon {
						.u-image {
							height: 51rpx !important;
							.u-image__image {
								height: 51rpx !important;
							}
						}
					}
				}
			}
		}
	}
	.customBtn {
		margin: 92rpx 24rpx 0 24rpx;
		width: calc(100% - 48rpx) !important;
	}
}
</style>
