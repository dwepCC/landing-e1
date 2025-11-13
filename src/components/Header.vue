<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Menu, Truck, Home, Info, Wrench, Phone } from 'lucide-vue-next'
const open = ref(false)
const router = useRouter()
const links = [
  { name: 'Inicio', to: { name: 'home' }, icon: Home },
  { name: 'Sobre Nosotros', to: { name: 'about' }, icon: Info },
  { name: 'Servicios', to: { name: 'services' }, icon: Wrench },
  { name: 'Flota', to: { name: 'fleet' }, icon: Truck },
  { name: 'Contacto', to: { name: 'contact' }, icon: Phone },
]
function go(to) { router.push(to); open.value = false }
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-dark/70 backdrop-blur border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <Truck class="w-7 h-7 text-primary" />
          <div class="font-semibold">ACIMSER RENTAL</div>
        </div>
        <nav class="hidden md:flex items-center gap-6">
          <button v-for="l in links" :key="l.name" @click="go(l.to)" class="flex items-center gap-2 text-sm hover:text-primary transition">
            <component :is="l.icon" class="w-4 h-4" />
            <span>{{ l.name }}</span>
          </button>
        </nav>
        <button @click="open=!open" class="md:hidden p-2 rounded hover:bg-gray-800">
          <span class="sr-only">Menu</span>
          <Menu class="w-6 h-6" />
        </button>
      </div>
    </div>
    <div v-if="open" class="md:hidden border-t border-gray-800">
      <div class="px-4 py-3 space-y-2">
        <button v-for="l in links" :key="l.name" @click="go(l.to)" class="flex items-center gap-2 w-full text-left py-2 rounded hover:bg-gray-800">
          <component :is="l.icon" class="w-5 h-5 text-primary" />
          <span>{{ l.name }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>