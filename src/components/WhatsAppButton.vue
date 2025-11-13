<script setup>
import { ref } from 'vue'
import { MessageCircle, Send, User, X } from 'lucide-vue-next'
const phone = '51962506653'
const company = 'ACIMSER RENTAL'
const open = ref(false)
const message = ref('Hola, me gustaría más información y una cotización. Gracias.')
function openChat() { open.value = true }
function closeChat() { open.value = false }
function sendMessage() {
  const text = encodeURIComponent(message.value.trim())
  const url = `https://wa.me/${phone}?text=${text}`
  window.open(url, '_blank')
  open.value = false
}
</script>

<template>
  <button @click="openChat" class="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 text-white shadow-lg p-4 animate-bounce hover:scale-105 transition">
    <MessageCircle class="w-6 h-6" />
  </button>
  <div v-if="open" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
      <div class="flex items-center gap-2 bg-primary text-white px-4 py-3">
        <User class="w-5 h-5" />
        <div class="font-semibold">{{ company }}</div>
        <button @click="closeChat" class="ml-auto p-1 rounded hover:bg-white/10">
          <X class="w-5 h-5" />
        </button>
      </div>
      <div class="px-4 py-3 space-y-3">
        <div class="text-sm text-gray-600">Escribe tu mensaje</div>
        <textarea v-model="message" rows="4" class="w-full border border-gray-300 text-dark rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
        <button @click="sendMessage" class="w-full bg-primary text-white rounded-md px-4 py-2 font-semibold flex items-center justify-center gap-2">
          <Send class="w-5 h-5" />
          <span>Enviar por WhatsApp</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>