<template>
  <div class="container-box">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container-box {
  height: calc(100% - 51px);
  width: 100%;
  overflow-x: hidden;
}
</style>
