<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-black border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
      <div>
        <div class="font-semibold text-yellow-400">Transporte Industrial</div>
        <p class="text-sm text-gray-400 mt-2">Alquiler de vehículos y maquinaria pesada para operaciones mineras y logísticas.</p>
      </div>
      <div>
        <div class="font-medium mb-3">Enlaces</div>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><RouterLink to="/" class="hover:text-yellow-400">Inicio</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-yellow-400">Sobre Nosotros</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-yellow-400">Servicios</RouterLink></li>
          <li><RouterLink to="/fleet" class="hover:text-yellow-400">Flota</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-yellow-400">Contacto</RouterLink></li>
        </ul>
      </div>
      <div>
        <div class="font-medium mb-3">Contacto</div>
        <ul class="space-y-2 text-sm text-gray-300">
          <li>Tel: +51 987 654 321</li>
          <li>Email: info@transporteindustrial.com</li>
          <li>Dirección: Lima, Perú</li>
        </ul>
        <div class="flex gap-3 mt-4">
          <a href="#" class="w-8 h-8 grid place-items-center rounded bg-gray-800 hover:bg-yellow-400">F</a>
          <a href="#" class="w-8 h-8 grid place-items-center rounded bg-gray-800 hover:bg-yellow-400">I</a>
          <a href="#" class="w-8 h-8 grid place-items-center rounded bg-gray-800 hover:bg-yellow-400">L</a>
        </div>
      </div>
    </div>
    <div class="text-center text-xs text-gray-500 py-4">© 2025 Transporte Industrial. Todos los derechos reservados.</div>
  </footer>
</template>

<style scoped>
</style>