<template>
  <div class="user-wrap">
    <div class="left-menu">
      <PublicMenuList />
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" scoped>
  import PublicMenuList from '@/components';
</script>