<template>
  <div class="menu-wrap">
    <div class="left-content">
      <div class="title">{{title}}</div>
      <div  :style="{'height':height + 'px'}" class="menu-box">
        <div ref="contentRef" class="menu-list">
          <router-link :class="{hov: !showName}" :to="'/'">所有</router-link>
          <router-link 
          v-for="(item, index) in dataList"
          :key="index"
          :class="{hov: item.name ===showName}" 
          :to="'/222'"
          >
            {{item.label}}
          </router-link>
        </div>
      </div>
     
    </div>
    <div>
      <!-- <el-icon><Plus /></el-icon> -->
      <span v-if="!isOpen" class="menu-btn" @click="handelClick">展开<el-icon><Plus /></el-icon></span>
      <span v-else class="menu-btn" @click="handelClick">收起<el-icon><Plus /></el-icon></span>
    </div>
   
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const isOpen = ref(false);
  const height = ref(30);
  const contentRef = ref<HTMLElement | null>(null);

  const props =defineProps<{
    title?: string,
    dataList?:Array<{ id: number; title: string }>; 
  }>()
  const { title, dataList } = props;

const handelClick = ()=>{
  const newHeight = contentRef.value.offsetHeight;
  isOpen.value = !isOpen.value;
  height.value = !isOpen.value  && newHeight > 40 ? newHeight : 30
}

</script>
<style lang="scss" scoped>
  .menu-wrap{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top:20px;
    overflow: hidden;
    .left-content{
      display: flex;
      .title{
        color:#070707;
        width: 80px;
        font-size:14px;
        line-height: 28px;
        // margin-right: 20px;
      }
      .menu-box{
        display: flex;
        flex-wrap: wrap;
      }
      .menu-list{
        font-size:14px;
        display:flex;
        flex-wrap: wrap;
        a{
          display: block;
          width: auto;
          padding: 2px 15px;
          margin-right: 10px;
          margin-bottom:10px;
          border: 1px solid #fff;
          overflow:hidden;
          transition: all 0.4s ease-out;
          flex-shrink: 0;
          &:hover{
            color: #ffa326;
          }
          &.hov{
            color:#ffa326;
            background-color:rgba(255, 168, 38, 0.08);
            border-color:#ffa326;
            border-radius: 30px;

          }
        }
      }
    }
    .menu-btn{
      display:inline-block;
      width: 60px;
      line-height:28px;
      border-radius: 2px;
      cursor: pointer;
      text-align: center;
      color:#b6b6b6;
      background-color: #f2f2f2;
      i{
        color:#ccc;
      }
      &:hover{
        background: rgba(255, 163, 38, 0.8);
        color:#fff;
        i{
          color:#fff;
        }
      }
    }
  }
</style>
