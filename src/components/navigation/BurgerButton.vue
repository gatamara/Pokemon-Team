<template>
  <button class="sm:hidden" @click="toggle">

    <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 24 24" stroke="currentColor"
      class="h-6 w-6 text-white">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="{2}" d="M4 6h16M4 12h16M4 18h16" />
    </svg>

    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 24 24" stroke="currentColor"
      class="h-6 w-6 text-white">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="{2}" d="M6 18L18 6M6 6l12 12" />
    </svg>

  </button>
</template>

<script lang="ts" setup>
interface Props {
  isOpen: boolean
}
interface Emits {
  toggle: []
}

const { isOpen } = defineProps<Props>()
const emits = defineEmits<Emits>()

const toggle = () => {
  emits('toggle')
}
</script>

<style scoped></style>
