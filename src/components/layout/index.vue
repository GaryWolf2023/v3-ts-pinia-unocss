<template>
  <div class="layout-box">
    <div class="sidebar-box">
      <Sidebar />
    </div>
    <div class="right-box">
      <Header />
      <Container />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Header, Sidebar, Container } from './components/index'
</script>

<style lang="scss" scoped>
.layout-box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;
  .sidebar-box {
    height: 100%;
  }
  .right-box {
    height: 100%;
    flex: 1;
  }
}
</style>
