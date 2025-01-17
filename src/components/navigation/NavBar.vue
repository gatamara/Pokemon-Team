<template>
  <header class="header">
    <div class="inner-header ">
      <img alt="Vue logo" class="logo" src="@/assets/pokemon-logo.svg" width="120" />
      <BurgerButton :isOpen="isOpen" @toggle="toggle" />
    </div>
    <nav :class="{ flex: !isOpen, hidden: isOpen }" class="navbar ">
      <RouterLink to="/" class="p-3 sm:p-2 " exact-active-class="text-white"> Home </RouterLink>
      <RouterLink to="/team" class="p-3 sm:p-2 " active-class="text-white"> Team </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">

import BurgerButton from '@/components/navigation/BurgerButton.vue'
import { ref } from 'vue'

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.header {
  @apply flex flex-col sm:flex-row items-center w-full sm:py-2 md:px-6 lg:px-8 sm:border-b sm:border-zinc-900 bg-black/80
}

.inner-header {
  @apply flex flex-row items-center justify-between w-full border-b border-zinc-900 px-3 py-2 sm:border-0 sm:p-0
}

.navbar {
  @apply flex-col w-full sm:flex sm:flex-row sm:w-auto sm:items-center sm:space-x-6 text-white/50
}
</style>
