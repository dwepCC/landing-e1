<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const open = ref(false)
const router = useRouter()
const links = [
  { name: 'Inicio', to: { name: 'home' } },
  { name: 'Sobre Nosotros', to: { name: 'about' } },
  { name: 'Servicios', to: { name: 'services' } },
  { name: 'Flota', to: { name: 'fleet' } },
  { name: 'Contacto', to: { name: 'contact' } },
]
function go(to) { router.push(to); open.value = false }
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-gray-900/70 backdrop-blur border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-yellow-400 rounded-sm"></div>
          <div class="font-semibold">Transporte Industrial</div>
        </div>
        <nav class="hidden md:flex items-center gap-6">
          <button v-for="l in links" :key="l.name" @click="go(l.to)" class="text-sm hover:text-yellow-400 transition">{{ l.name }}</button>
        </nav>
        <button @click="open=!open" class="md:hidden p-2 rounded hover:bg-gray-800">
          <span class="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M3.75 5.25h16.5v1.5H3.75zM3.75 11.25h16.5v1.5H3.75zM3.75 17.25h16.5v1.5H3.75z" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="open" class="md:hidden border-t border-gray-800">
      <div class="px-4 py-3 space-y-2">
        <button v-for="l in links" :key="l.name" @click="go(l.to)" class="block w-full text-left py-2 rounded hover:bg-gray-800">{{ l.name }}</button>
      </div>
    </div>
  </header>
  <div class="h-16"></div>
</template>

<style scoped>
</style>