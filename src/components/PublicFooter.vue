<script setup lang="ts">
defineProps<{}>()
</script>

<template>
  <footer class="footer-wrap">
    <ul class="footer-icons w1200">
      <li><i class="icon_1"></i>正品保障</li>
      <li><i class="icon_2"></i>品类齐全</li>
      <li><i class="icon_3"></i>诚信服务</li>
      <li><i class="icon_4"></i>金融服务</li>
    </ul>
    <div class="footer-content">
      <ul class="w1200">
        <li>
          <h5>如何注册</h5>
          <router-link to="#" title="手机注册">手机注册</router-link>
        </li>
        <li>
          <h5>如何下单</h5>
          <router-link to="#" title="下单流程">下单流程</router-link>
          <router-link to="#" title="订单状态">订单状态</router-link>
          <router-link to="#" title="促销码">促销码</router-link>
          <router-link to="#" title="下单政策">下单政策</router-link>
          <router-link to="#" title="报价单">报价单</router-link>
        </li>
        <li>
          <h5>如何支付</h5>
          <router-link to="#" title="网上支付">网上支付</router-link>
          <router-link to="#" title="网银转账">网银转账</router-link>
        </li>
        <li>
          <h5>配送政策</h5>
          <router-link to="#" title="配送政策">配送政策</router-link>
        </li>
        <li>
          <h5>售后服务</h5>
          <router-link to="#" title="售后政策">售后政策</router-link>
          <router-link to="#" title="7天无理由退换货">7天无理由退换货</router-link>
          <router-link to="#" title="投诉与建议">投诉与建议</router-link>
        </li>
        <li>
          <h5>网站地图</h5>
          <router-link to="#" title="全部产品分类">全部产品分类</router-link>
          <router-link to="#" title="全部产品分类">全部品牌</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-wrap {
  width: '100%';
  background-color: #fff;
  .footer-icons {
    display: flex;
    padding: 35px 0 25px 0;
    li {
      width: 25%;
      line-height: 30px;
      font-size: 18px;
      text-align: center;
      i {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        &.icon_1 {
          background: url('../assets/footer/icon_1.png') no-repeat 0 0;
          background-size: cover;
        }
        &.icon_2 {
          background: url('../assets/footer/icon_2.png') no-repeat 0 0;
          background-size: cover;
        }
        &.icon_3 {
          background: url('../assets/footer/icon_3.png') no-repeat 0 0;
          background-size: cover;
        }
        &.icon_4 {
          background: url('../assets/footer/icon_4.png') no-repeat 0 0;
          background-size: cover;
        }
      }
    }
  }
  .footer-content {
    padding: 60px 0 80px 0;
    ul {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      li {
        display: flex;
        flex-direction: column;
        h5 {
          font-size: 20px;
          font-weight: bold;
          line-height: 40px;
          color: #333;
        }
        a {
          line-height: 30px;
          font-size: 14px;
          color: #666;
          display: block;
        }
        a:hover {
          color: #ffa326;
        }
      }
    }
  }
}
</style>
