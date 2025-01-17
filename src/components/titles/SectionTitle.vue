<template>
  <div>
    <h1 class="text-4xl font-bold text-center pt-8 pb-4 text-white/90">{{ text }}</h1>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  text: string
}

defineProps<Props>()
</script>
