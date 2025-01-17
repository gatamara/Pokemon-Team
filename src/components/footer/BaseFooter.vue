<template>
  <footer class="footer">
    <p class="text-footer">© {{ new Date().getFullYear() }} Tamara Salinas</p>
  </footer>
</template>

<style scoped>
.footer {
  @apply absolute bottom-0 w-full flex items-center h-14 px-4 border-t border-zinc-900 sm:h-16 md:px-6 lg:px-8 bg-black
}

.text-footer {
  @apply flex-1 text-sm text-gray-500 text-center
}
</style>
