<template>
  <div
    class="flex justify-center items-center rounded-md w-[340px] h-[80px] my-4 p-2 bg-green-500 hover:bg-green-600   cursor-pointer z-50"
    @click="onLoadMore">
    <h2 class="text-lg text-white">Cargar mas Pokemon</h2>
    <PokeballLoading />

  </div>
</template>
<script lang="ts" setup>

import PokeballLoading from '../loadings/PokeballLoading.vue';

interface Emits {
  click: []
}

const emits = defineEmits<Emits>()

const onLoadMore = () => {
  emits('click')
}
</script>
<style scoped></style>
