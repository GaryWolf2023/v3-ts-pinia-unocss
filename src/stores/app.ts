import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const openSidebar = ref(true)
  function changeSidebar() {
    openSidebar.value = !openSidebar.value
  }

  return { openSidebar, changeSidebar }
})
