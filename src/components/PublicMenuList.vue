<script lang="ts" scoped>
import { reactive } from 'vue'
// const state = reactive({
// })
const menuList = [
  {
    title: '标讯中心',
    order: '1',
    link: [
      { title: '我的招标', url: '/user/bidding' },
      { title: '我的投标', url: '/user/myBid' },
      { title: '我的定向', url: '/user/assign' },
      { title: '我的浏览', url: '/user/browse' }
    ]
  },
  {
    title: '订单中心',
    order: '2',
    link: [
      { title: '我的订单', url: '/user/order' },
      { title: '发票中心', url: '/user/InvoiceHeader' }
    ]
  },
  {
    title: '用户中心',
    order: '4',
    link: [
      { title: '我的信息', url: '/user/myInfo' },
      { title: '安全中心', url: '/user/securityCenter' },
      { title: '会员中心', url: '/user/vipInfo' },
      { title: '消息中心', url: '/user/information' }
    ]
  }
]
</script>

<template>
  <div class="public-menu-wrap">
    <div v-for="(item, index) in menuList" :key="index">
      <h5 class="title">{{ item.title }}</h5>
      <router-link
        v-for="(childMenu, j) in item.link"
        :key="{ j }"
        :to="childMenu.url"
        :title="childMenu.title"
      >
        {{ childMenu.title }}
      </router-link>
    </div>
  </div>
</template>
