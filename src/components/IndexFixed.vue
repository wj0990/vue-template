<template>
  <div class="fixed-wrap">
    <div class="left-content">
      <div class="item" title="商城" @click="handleClick">
        <i-ep-goods-filled />
        商城
      </div>
      <div class="item" title="售后服务" @click="handleClick">
        <i-ep-service />
        售后服务
      </div>
      <div class="item" title="金融服务" @click="handleClick">
        <i-ep-wallet-filled />
        金融服务
      </div>
      <div class="item" title="IOT设备" @click="handleClick">

        <i-ep-printer />
        <goods-filled />
        <IconEpApple />
        IOT设备
      </div>
    </div>
    <div class="right-content">
      <div class="item" title="商城" @click="handleClick">
        <i-ep-promotion />
        发<br />布<br />订<br />单
      </div>
      <div class="item" title="售后服务" @click="handleClick">
        <i-ep-user-filled />
        我的
      </div>
    </div>
  </div>
</template>
<script lang="ts" scoped>

</script>

<style lang="scss">
.fixed-wrap{

  .item{
      display: flex;
      font-size:12px;
      flex-direction: column;
      align-items: center;
      padding-top:10px;
      padding-bottom:10px;
      // margin-top:10px;
      // margin-bottom: 20px;
      &:hover{
        background-color:rgb(13 23 38 / 5%);
      }
      svg{
        font-size: 24px;
        padding: 4px;
        margin-bottom:10px;
        border-radius: 5px;
      }  
  }    
  .left-content{
    width: 56px;
    position: fixed;
    top: 250px;
    left: 76px;
    color:#ff4646;
    // padding:10px 0 20px;
    border-radius: 2px;
    background-color:#fff;
    div:first-child{
    padding-top:20px;
    }
    div:last-child{
      padding-bottom:20px;
    }
    // .item{
    //   display: flex;
    //   font-size:12px;
    //   flex-direction: column;
    //   align-items: center;
    //   padding-top:10px;
    //   padding-bottom:10px;
    //   // margin-top:10px;
    //   // margin-bottom: 20px;
    //   &:hover{
    //     background-color:rgb(13 23 38 / 5%);
    //   }  
    //   svg{
    //     font-size: 24px;
    //     color:#fff;
    //     padding: 4px;
    //     margin-bottom:10px;
    //     border-radius: 5px;
    //   }
    // }
    svg{
        color:#fff;
      
      }  
    div:nth-child(1) svg{
        background-color:#ff4646;
      }
      div:nth-child(2) svg{
        background-color:#4e85fc;
      }
      div:nth-child(3) svg{
        background-color:#1fcb7c;
      }
      div:nth-child(4) svg{
        background-color:#208ed3;
      }
  }
  .right-content{
    width: 56px;
    position: fixed;
    top: 250px;
    right: 76px;
    font-size: 16px;
    // padding:10px 0 20px;
    border-radius: 2px;
    color:#ffa326;    
    .item{
      background-color:#fff;
      &:hover{
        background-color:#ffa326;
        color: #fff;
      }
    }
    div:first-child{
      margin-bottom:20px;
      padding-top:20px;
      width: 56px;
      font-size: 16px;
      font-weight: bold;
    } 
  } 
}
</style>