<template>
  <div class="sidebar-box" :style="style">
    <div class="sidebar-top">
      <img src="https://avatars.githubusercontent.com/u/25190530?v=4" alt="avatar" />
      <span class="app-title">lby</span>
    </div>
    <div class="sidebar-menu">
      <menu-item></menu-item>
    </div>
  </div>
</template>

<script setup lang="ts">
const style = reactive({
  width: '240px'
})
</script>

<style lang="scss" scoped>
.sidebar-box {
  height: 100%;
  border-right: 1px solid #999ba0;
  .sidebar-top {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 46px;
      height: 46px;
      margin-left: 4px;
    }
    .app-title {
      margin-left: 10px;
      font-size: 16px;
      font-weight: 600;
      color: #606266;
    }
  }
  .sidebar-menu {
    height: calc(100% - 60px);
    width: 100%;
    overflow-x: hidden;
    padding: 5px 0;
  }
}
</style>
