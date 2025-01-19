<template>
  <div class="p-5">
    <Vue3Lottie :animation-data="PokeballLottie" :height="70" :width="70" />
  </div>
</template>
<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import PokeballLottie from '@/assets/pokeball-lottie.json'
</script>
<style scoped></style>
