<template>
  <div class="carousel-wrap">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item
        v-if="!!masterCarousel"
      >
      </el-carousel-item>
      <div v-for="(item, index) in dataList" :key=index>
        <el-carousel-item v-if="!item.isMaster">
          <a :title="item.des" @click="jump(item.path)">
            <el-image :src="item.url" :alt="item.des"></el-image>
          </a>
        </el-carousel-item>
      </div>
    </el-carousel>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  dataList: Array<{ id: number; title: string }>; // 根据实际数据结构定义
}>();

 const { dataList=[] } = props;
const masterCarousel = ref(false);

const jump =(url) =>{
if(url && url.length > 1){
  window.open(url, '_blank')
}else{
  location.href="#"
}
}
 
</script>
<style lang="scss" scoped>
.carousel-wrap {
  width: 1200px;
  height: 285px;
  margin:0 auto;
  overflow: hidden;
}
</style>