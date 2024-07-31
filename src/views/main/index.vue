<!-- <template>
  <div class="main-wrapper">
    1221121212
    <publicHeader />
    <publicFooter />
  </div>
</template>

<script>
import { publicHeader, publicFooter } from '@/components'
</script> -->

<template>
  <div class="main-wrapper">
    <PublicHeader />
    <router-view ref="main" />
    <PublicFooter />
  </div>
</template>

<script>
import { PublicHeader, PublicFooter } from '@/components'
</script>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
body {
  font-size: 12px;
  color: #333;
  background-color: #f4f4f4;
  .w1200 {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    *zoom: 1;
  }
  .w100 {
    width: 100%;
    *zoom: 1;
  }
  .fl {
    float: left;
    *zoom: 1;
  }
  .fr {
    float: right;
    *zoom: 1;
  }
  // .w1200:after,
  // .w100:after,
  // .fl:after,
  // .fr:after {
  //   content: '';
  //   display: block;
  //   clear: both;
  // }
  a {
    text-decoration: none;
  }
  ul,
  li,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  ul,
  li {
    list-style: none;
  }
}
</style>
