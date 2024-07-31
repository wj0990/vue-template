<template>
  <div class="index-wrap w1200">
    <IndexFixed />
    <CarouselBox :key="state.carouselList.length" :dataList="state.carouselList" />
    <div class="index-content">
      <div v-for="item in cardList" :key="item.key">
        <MenuList
          :title="item.label"
          :key="item.key == 'industry' ? state.industryList?.length : state.areaList?.length"
          :dataList="item.key == 'industry' ? state.industryList : state.areaList"
        />
      </div>
    </div>
    <div class="projects-wrap" v-loading="state.loading">
      <div class="image-list">
        <div class="image-item" v-for="item in state.productList" :key="item.id">
          <router-link :to="'project/info/' + item?.id">
            <div class="image-card">
              <img :src="item?.productPath" :alt="item?.title" />
              <div class="count-box">
                <span class="count">{{ item?.count }}</span>
              </div>
            </div>
            <span class="title">{{ item?.title }}</span>
            <div class="des-wrap">
              <span>{{ item?.region }}</span>
              <span>{{ item?.name }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pagination-wrap">
      <el-pagination
        v-model:current-page="state.pageIndex"
        :page-size="state.pageSize"
        size="default"
        background="true"
        layout="total, prev, pager, next, jumper"
        :total="state.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { CarouselBox, IndexFixed } from '@/components'
import {
  getAreaList,
  getIndustry,
  getProductSelectPage,
  getAdvertisementList
} from '../../services/common'
import { onMounted, ref, reactive } from 'vue'
import MenuList from './com/MenuList.vue'

const state = reactive({
  loading: false,
  carouselList: [],
  areaList: [],
  industryList: [],
  productList: [],
  pageIndex: 1,
  pageSize: 2,
  total: 0
})

const cardList = [
  { label: '选择行业', key: 'industry' },
  { label: '选择地区', key: 'area' }
]
// 查询产品
const getProductList = (params = {}) => {
  const query = { page: state.pageIndex, pagesize: state.pageSize, ...params }
  getProductSelectPage(query).then((response) => {
    if (response && response.data) {
      state.productList = [...response.data.rows]
      state.total = response.data.total
    }
  })
}

const handleSizeChange = (val: number) => {
  getProductList({ page: val })
}

const handleCurrentChange = (val: number) => {
  console.log('---var----->', val)
}

onMounted(() => {
  // 轮播图
  getAdvertisementList().then((response) => {
    if (response && response.data) {
      state.carouselList = [...response.data.dataList]
    }
  })
  // //
  getAreaList().then((response) => {
    if (response && response.data) {
      state.areaList = [...response.data.dataList]
    }
  })
  getIndustry().then((response) => {
    if (response && response.data) {
      state.industryList = [...response.data.dataList]
    }
  })
  getProductList()
})
</script>
<style lang="scss" scoped>
.index-wrap {
  margin: 20px auto;
  background-color: #fff;
  .index-content {
    // display: flex;
    width: 100%;
    padding: 0 15px 15px 25px;
  }
}
.projects-wrap {
  display: flex;
  width: '100%';
  min-height: 300px;
  overflow: hidden;
  .image-list {
    display: flex;
    flex-wrap: wrap;
  }
  .image-item {
    width: 285px;
    padding-bottom: 10px;
    margin-right: 20px;
    overflow: hidden;
    &:nth-child(4n) {
      margin-right: 0;
    }
    a {
      color: #333;
      display: block;
      overflow: hidden;
      &:hover {
        color: #ffa326;
      }
    }
    .image-card {
      width: 100%;
      height: 165px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
      .count-box {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        padding-right: 10px;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
        .count {
          color: #fff;
        }
      }
    }
    .title {
      margin-top: 20px;
    }
    .des-wrap {
    }
  }
}
.pagination-wrap {
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background-color: #f4f4f4;
}
</style>
