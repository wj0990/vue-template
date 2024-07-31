<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { PublicTool } from '@/components'
// import { defineComponent } from '@vue/composition-api'

const router = useRouter()
const search = ref('')
const lastSearch = ref('')

const searchClick = (event) => {
  if (search) {
    router.push(`/?keywords=${search?.value}`)
  } else if (lastSearch && !search) {
    router.push('/')
  }
}

// export default defineComponent({
//   setup() {

//   },
// })
</script>

<template>
  <headder class="header-wraper">
    <PublicTool />
    <div class="header-top w1200">
      <div class="header-content fl">
        <router-link to="/" title="实例系统" class="logo fl"></router-link>
        <div class="title-wrap">
          <span class="title">尼好系统</span>
          <p>集成系统服平台</p>
        </div>
      </div>
      <div class="header-right fr">
        <div class="header-search-wrap">
          <el-input
            v-model="search"
            placeholder="请输入投标名称"
            class="search-input fl"
            @keyup.enter="searchClick"
          ></el-input>
          <el-button type="primary" icon="el-icon-search" class="search-btn fl" @click="searchClick"
            >搜索</el-button
          >
        </div>
      </div>
    </div>
  </headder>
</template>

<style lang="scss" scoped>
.header-wraper {
  display: block;
  background-color: #fff;
  .header-top {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding-top: 45px;
    padding-bottom: 35px;
    .logo {
      width: 184px;
      height: 49px;
      background: url('../../src/assets/logo.svg');
      background-size: cover;
      margin-right: 20px;
    }
    .header-content {
      font-size: 16px;
      display: flex;
      align-items: center;
      .title-wrap {
        span {
          font-size: 30px;
          font-weight: mormal;
          display: block;
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      .header-search-wrap {
        display: flex;
        .search-input {
          width: 468px;
          height: 36px;
          border: 2px solid #ffa326;
          border-radius: 4px 0 0 4px;
        }
        .search-btn {
          width: 112px;
          height: 36px;
          line-height: 36px;
          color: #fff;
          font-size: 16px;
          border-radius: 0 4px 4px 0;
        }
      }
    }
  }
}
</style>
