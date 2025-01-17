<template>
  <div class="p-2 rounded-full bg-orange-400 cursor-pointer" @click="onClick">
    <img src="@/assets/trash-icon.svg" alt="remove" />
  </div>
</template>
<script lang="ts" setup>
interface Emits {
  click: []
}

const emits = defineEmits<Emits>()

const onClick = () => {
  emits('click')
}
</script>
<style scoped></style>
