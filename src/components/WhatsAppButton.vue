<script setup>
const phone = '51987654321'
function openWhatsApp() {
  const url = `https://wa.me/${phone}`
  window.open(url, '_blank')
}
</script>

<template>
  <button @click="openWhatsApp" class="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 text-white shadow-lg p-4 animate-bounce hover:scale-105 transition">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M12 2a10 10 0 00-8.94 14.5L2 22l5.61-1.47A10 10 0 1012 2zm0 18a8 8 0 01-4.09-1.12l-.29-.17-3.33.87.89-3.24-.19-.31A8 8 0 1112 20zm-4.11-6.73c.11.2.79 1.3 2.05 1.83.97.4 1.58.44 1.89.41.3-.03.94-.38 1.07-.75.13-.36.13-.68.09-.75-.04-.07-.16-.11-.34-.19-.18-.08-1.05-.52-1.21-.58-.16-.06-.28-.09-.4.09-.12.18-.46.58-.56.7-.1.12-.21.13-.39.05-.18-.08-.77-.28-1.47-.9-.54-.48-.9-1.08-1-1.26-.1-.18-.01-.28.07-.36.07-.07.17-.18.25-.29.08-.11.11-.2.17-.33.06-.13.03-.25-.02-.35-.05-.1-.39-.94-.54-1.29-.14-.34-.28-.29-.39-.29-.1 0-.22 0-.34.01-.12.01-.31.03-.47.22-.16.19-.62.6-.62 1.46s.64 1.68.73 1.79z" />
    </svg>
  </button>
</template>

<style scoped>
</style>