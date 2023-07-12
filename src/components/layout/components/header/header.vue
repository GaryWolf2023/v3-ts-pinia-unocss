<template>
  <div
    class="h-50px w-full display-flex justify-end flex-items-center fs-18 lh-50px position-relative b-0 b-b-1 b-solid b-gray-400"
  >
    <span @click="changeOpen" class="position-absolute top-0 bottom-0 left-1">
      <i-ep-Expand v-if="isopen" />
      <i-ep-Fold v-else />
    </span>
    <span class="m-x-12" @click="toggleDark()">
      <i-ep-sunny v-if="!isDark" />
      <i-ep-moon v-else />
    </span>
    <span class="m-x-12">
      <i-ep-FullScreen v-if="!isFullscreen" @click.stop="enter" />
      <i-ep-close v-else @click.stop="exit" />
    </span>
    <span class="display-inline-block w-50px h-full m-l-1">
      <img
        class="w-42px h-42px m-l-4px m-t-4px"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9e18d14b-8a44-41b0-97d9-6aed05b70e7f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1691733271&t=ed2412da5f53120da070168e369d7104"
        alt=""
      />
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
const el = ref<HTMLElement>()
const { isFullscreen, enter, exit } = useFullscreen(el)
</script>

<style lang="scss" scoped></style>
