<script lang="ts" setup>
import { reactive } from 'vue'
import { Check } from '@element-plus/icons-vue'
import { useGlobalProperties } from '../../hooks'

const { $CONFIG } = useGlobalProperties()
const form = reactive({})

const rules = {
  userName: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
</script>

<template>
  <div class="login-wrap">
    <div class="login-container">
      <div class="login-body">
        <div class="login-form">
          <div class="login-logo">
            <img class="logo" :alt="$CONFIG.CONFIG_NAME" src="../../../public/img/logo.png" />
            <h2>用户登陆</h2>
          </div>
          <el-form :model="form" :rules="rules" label-width="auto" style="max-width: 600px">
            <el-form-item label="" props="user">
              <el-input
                v-mode="form.userName"
                prefix-icon="el-icon-user"
                clearable
                placeholder="请输入用户名"
              >
                <template #append>
                  <el-select
                    v-model="form.useeType"
                    placeholder="请选择"
                    style="width: 90px"
                    prefix-icon="el-icon-user"
                    clearable
                    palaceholder=""
                  >
                    <el-option label="管理员" value="admin" />
                    <el-option label="用户" value="user" />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class="psd-item" props="password" label="">
              <el-input
                v-model="form.password"
                prefix-icon="el-icon-lock"
                cleaeable
                show-password
                placeholder="请输入密码"
              />
            </el-form-item>
            <el-form-item class="forget-item" style="margin-top: 10px">
              <el-row class="">
                <el-col :span="12">
                  <el-checkbox v-model="form.autoLogin" label="记住我" />
                </el-col>
                <el-col :span="12" style="text-align: right">
                  <el-button type="text">忘记密码？</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" :loading="isLogin" round @click="login"
                >登 录</el-button
              >
            </el-form-item>
          </el-form>
          <el-divider>其它登录方式</el-divider>
          <div class="login-oauth">
            <el-button type="primary" circle>
              <template #icon>
                <img src="/src/assets/login/alipay.svg" alt="icon" width="25" height="25" />
              </template>
            </el-button>
            <el-button type="success" circle>
              <template #icon>
                <img src="/src/assets/login/wechat.svg" alt="icon" width="20" height="20" />
              </template>
            </el-button>
            <el-button type="success" style="background-color: #000000" circle>
              <template #icon>
                <img src="/src/assets/login/github.svg" alt="icon" width="20" height="20" />
              </template>
            </el-button>
          </div>
        </div>
        <div class="login-sidebox">
          <div class="login-sidebox-title">
            <h2>尼好办公</h2>
            <h4>项目管理</h4>
          </div>
          <!-- https://www.iconfont.cn/illustrations/detail?spm=a313x.illustrations_index.i1.d9df05512.e3f63a81VRQgDy&cid=49568&show_id=458232 -->
          <img src="../../../public/img/loginBg.svg" />
        </div>
      </div>
      <div class="login-footer">© {{ $CONFIG.APP_NAME }}{{ $CONFIG.APP_VERSION }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrap {
  .icon_alipay {
    font-size: 24px;
    color: red;
    background-image: url('../../assets/login/alipay.svg');
  }

  // position: relative;
  .login-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1100px;
    z-index: 1;
    transform: translate(-50%, -50%);
    .login-body {
      display: flex;
      box-shadow: 0 20px 80px 0px rgba(0, 0, 0, 0.3);
      .login-form {
        width: 50%;
        padding: 60px 100px;
        background: #fff;
        .el-form {
          .psd-item {
            margin-bottom: 0;
          }
          .forget-item {
            margin-top: 0 !important;
            .el-row {
              width: 100%;
            }
          }
        }
      }
      .login-logo {
        text-align: center;
        margin-bottom: 30px;
        .logo {
          // width: 70px;
          height: 70px;
          vertical-align: bottom;
        }
        h2 {
          font-size: 24px;
          margin-top: 20px;
          color: #40485b;
        }
      }
      .login-oauth {
        display: flex;
        justify-content: space-around;
      }
      .login-sidebox {
        width: 50%;
        padding: 60px;
        color: #fff;
        background-color: #edb86f;
        position: relative;
        overflow: hidden;
        .login-sidebox-title {
          z-index: 999;
          h2 {
            font-size: 30px;
          }
          h4 {
            font-size: 18px;
            margin-top: 10px;
            font-weight: normal;
          }
        }
        img {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 550px;
        }
      }
    }
  }
}
</style>
