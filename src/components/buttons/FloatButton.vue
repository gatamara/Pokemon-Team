<template>
  <div class="fixed bottom-3 right-0 rounded-l-lg bg-black cursor-pointer z-50" @click="onButtonClick">
    <div class="flex flex-row items-center">
      <img class="h-12" src="@/assets/pokeball-icon.svg" alt="pokeball" />
      <h2 class="text-3xl pr-2 pl-1 text-white">{{ props.total }}</h2>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  total: number
}
interface Emits {
  click: []
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const onButtonClick = () => {
  emits('click')
}
</script>
<style scoped></style>
