<template>
  <div class="sidebar-box" :style="style">
    <div class="sidebar-top">
      <img src="https://avatars.githubusercontent.com/u/25190530?v=4" alt="avatar" />
    </div>
    <div class="sidebar-menu">1</div>
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
  border-right: 1px solid #ebeef5;
  .sidebar-top {
    height: 51px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 46px;
      height: 46px;
      margin-left: 4px;
    }
  }
  .sidebar-menu {
    height: calc(100% - 51px);
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
