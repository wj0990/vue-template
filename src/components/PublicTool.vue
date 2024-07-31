<script>
import { ref } from 'vue'

const isLogin = ref(false)
</script>

<template>
  <div class="tool-wrap">
    <div class="w1200 content">
      <div class="left-content fl">
        <div class="left-text">欢迎光临</div>
        <div class="left-link">
          <div v-if="isLogin">
            <span>{{ userInfo.userName || '' }}</span>
            <span class="quit" @click="signout">退出</span>
          </div>
          <template v-else>
            <el-button type="text" @click="loginUrl" class="">登陆</el-button> |
            <el-button type="text" @click="registerUrl">免费注册</el-button>
          </template>
        </div>
      </div>
      <div class="right-content fr">
        <div class="fr-notice" @click="toNotice" v-if="isLogin">
          <template v-if="noticeNumber > 0">
            <i class="bell"></i>
            <div class="notice-number">{{ noticeNumber }}</div>
          </template>
        </div>
        <el-button text="text" @click="clickLinkBtn('A')">项目1</el-button>
        <el-button text="text" @click="clickLinkBtn('B')">项目2</el-button>
        <el-button text="text" @click="clickLinkBtn('C')">项目3</el-button>
        <el-button text="text" @click="clickLinkBtn('D')">项目4</el-button>
        <el-button text="text" @click="clickLinkBtn('D')">项目5</el-button>
        <el-button text="text" @click="clickLinkBtn('D')">项目6</el-button>
        <el-button text="text" @click="clickLinkBtn('D')">项目7</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tool-wrap {
  display: flex;
  line-height: 40px;
  border-bottom: 1px solid #ebebeb;
  .content {
    font-size: 12px;
    .left-content {
      display: flex;
      .left-text {
        margin-right: 20px;
      }
    }
    .right-content {
      .el-button > span {
        font-weight: bolder;
        color: red !important;
      }
    }
    .el-button {
      font-size: 12px;
      color: #333;
      font-weight: bolder;
    }
    .el-button + .el-button {
      margin-left: 0 !important;
    }
  }
}
</style>
