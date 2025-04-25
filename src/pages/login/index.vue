<route lang="json5">
    {
      style: {
        navigationStyle: 'custom',
        navigationBarTitleText: '登录',
      },
    }
    </route>
<template>
 <view class="normal-login-container">
    <view class="logo-content align-center justify-center flex">
      <!-- <image
        style="width: 100rpx; height: 100rpx"
        :src="globalConfig.appInfo.logo"
        mode="widthFix"
      ></image> -->
      <text class="title">今世缘APP</text>
    </view>
    <view class="login-form-content">
      <view class="input-item flex align-center">
        <view class="iconfont icon-user icon"></view>
        <input
          v-model="loginForm.username"
          class="input"
          type="text"
          placeholder="请输入账号"
          maxlength="30"
        />
      </view>
      <view class="input-item flex align-center">
        <view class="iconfont icon-password icon"></view>
        <input
          v-model="loginForm.password"
          type="password"
          class="input"
          placeholder="请输入密码"
          maxlength="20"
        />
      </view>
     <view
        class="input-item flex align-center"
        style="width: 60%; margin: 0px"
        v-if="captchaEnabled"
      >
        <view class="iconfont icon-code icon"></view>
        <input
          v-model="loginForm.code"
          type="number"
          class="input"
          placeholder="请输入验证码"
          maxlength="4"
        />
        <view class="login-code">
          <image :src="codeUrl" @click="getCode" class="login-code-img"></image>
        </view>
      </view> 
      <view class="action-btn">
        <wd-button  size="large" block @click="handleLogin" custom-class="customBtn">登录</wd-button>
      </view>
      <view class="reg text-center" v-if="register">
        <text class="text-grey1">没有账号？</text>
        <text @click="handleUserRegister" class="text-blue">立即注册</text>
      </view>
      <view class="xieyi text-center">
        <wd-checkbox-group v-model="checkboxValue1" @change="changeAgreement">
          <wd-checkbox
            activeColor="#AA001E"
            name="agreement"
            :checked="isAgreement"
            shape="square"
          ></wd-checkbox>
        </wd-checkbox-group>
        <text class="text-grey1">已阅读并同意</text>
        <text @click="handleUserAgrement" class="text-blue">《用户协议》</text>
        和
        <text @click="handlePrivacy" class="text-blue">《隐私政策》</text>
      </view>
    </view>
    <!-- <u-toast ref="uToast"></u-toast> -->
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { getCodeImg} from '@/service/app/login'
const userStore = useUserStore()
const uToast = ref()

// 表单数据
const loginForm = ref({
  username: '13866941131',
  password: 'Cicdi@123456',
  code: '',
  uuid: ''
})

""
// 验证码开关
const captchaEnabled = ref(false)
// 注册开关
const register = ref(false)
// 验证码图片
const codeUrl = ref('')
// 协议勾选
const isAgreement = ref(false)
const checkboxValue1 = ref([])

// 获取验证码
const getCode = async () => {
  const res = await getCodeImg({})
  if (res) {
    console.log('res',res)
    codeUrl.value = 'data:image/gif;base64,' + res.data.img
    loginForm.value.uuid = res.data.uuid
  }
}

// 协议勾选变更
const changeAgreement = (e: any) => {
  isAgreement.value = e.length > 0
}

// 处理登录
const handleLogin = async () => {
  try {
    userStore.loginSuccess(loginForm.value)

  } catch (error: any) {
    if (captchaEnabled.value) {
      getCode()
    }
    // uToast.value.show({ type: 'error', message: error.msg || '登录失败' })
  }
}

// 处理注册
const handleUserRegister = () => {
  uni.navigateTo({
    url: '/pages/register/index'
  })
}

// 处理用户协议
const handleUserAgrement = () => {
  uni.navigateTo({
    url: '/pages/agreement/user'
  })
}

// 处理隐私政策
const handlePrivacy = () => {
  uni.navigateTo({
    url: '/pages/agreement/privacy'
  })
}

// 初始化获取验证码
getCode()
</script>
<style lang="scss" scoped>
.page-class {
  :deep() {
    .custom-shadow {
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
  }
}
.normal-login-container {
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0 40rpx;

  .logo-content {
    padding-top: 200rpx;
    .title {
      font-size: 36rpx;
      font-weight: 600;
      margin-left: 20rpx;
    }
  }

  .login-form-content {
    margin-top: 100rpx;

    .input-item {
      height: 100rpx;
      border-bottom: 1rpx solid #dcdfe6;
      margin-bottom: 40rpx;

      .icon {
        color: #999;
        font-size: 40rpx;
        margin-right: 20rpx;
      }

      .input {
        flex: 1;
        font-size: 32rpx;
      }

      .login-code {
        margin-left: 20rpx;
        .login-code-img {
          width: 180rpx;
          height: 80rpx;
        }
      }
    }

    .action-btn {
      margin-top: 80rpx;
      .customBtn {
        background: #AA001E !important;
      }
    }

    .reg {
      margin-top: 40rpx;
      .text-grey1 {
        color: #999;
      }
      .text-blue {
        color: #AA001E;
      }
    }

    .xieyi {
      margin-top: 40rpx;
      .text-grey1 {
        color: #999;
      }
      .text-blue {
        color: #AA001E;
      }
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
}
</style>

