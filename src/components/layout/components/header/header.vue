<template>
  <div
    class="h-50px w-full display-flex justify-end flex-items-center fs-18 lh-50px position-relative border-color-#fff-a b-b-1"
  >
    <span @click="changeOpen" class="position-absolute top-0 bottom-0 left-1">
      <i-ep-Expand v-if="isopen" />
      <i-ep-Fold v-else />
    </span>
    <span class="m-x" @click="toggleDark()">
      <i-ep-sunny v-if="!isDark" />
      <i-ep-moon v-else />
    </span>
    <span @click.stop="changeFullScreen">
      <i-ep-FullScreen />
    </span>
    <span class="display-inline-block w-50px h-full m-l-1">
      <img class="w-42px h-42px m-l-4px m-t-4px" src="" alt="" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { toggleDark, isDark } from '~/composables'
import { useFullscreen } from '@vueuse/core'
import { useAppStore } from '~/stores/app'
const appStore = useAppStore()
const isopen = computed(() => appStore.openSidebar)
const changeOpen = () => {
  appStore.changeSidebar()
}
const { isFullscreen } = useFullscreen()
const changeFullScreen = () => {
  isFullscreen.value = !isFullscreen.value
}
</script>

<style lang="scss" scoped></style>
