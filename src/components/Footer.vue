<script setup>
import { RouterLink } from 'vue-router'
import { Share2, Link as LinkIcon, Globe, Home, Info, Wrench, Truck, Phone } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-dark text-white border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
      <div>
        <div class="font-semibold text-primary">ACIMSER RENTAL</div>
        <p class="text-sm text-graymid mt-2">Comprometidos con la excelencia y la satisfacción del cliente, proporcionando soluciones de transporte y maquinaria que impulsan el éxito de tus proyectos.</p>
      </div>
      <div>
        <div class="font-medium mb-3">Enlaces</div>
        <ul class="space-y-2 text-sm text-graymid">
          <li><RouterLink to="/" class="flex items-center gap-2 hover:text-primary"><Home class="w-4 h-4 text-primary" />Inicio</RouterLink></li>
          <li><RouterLink to="/about" class="flex items-center gap-2 hover:text-primary"><Info class="w-4 h-4 text-primary" />Sobre Nosotros</RouterLink></li>
          <li><RouterLink to="/services" class="flex items-center gap-2 hover:text-primary"><Wrench class="w-4 h-4 text-primary" />Servicios</RouterLink></li>
          <li><RouterLink to="/fleet" class="flex items-center gap-2 hover:text-primary"><Truck class="w-4 h-4 text-primary" />Flota</RouterLink></li>
          <li><RouterLink to="/contact" class="flex items-center gap-2 hover:text-primary"><Phone class="w-4 h-4 text-primary" />Contacto</RouterLink></li>
        </ul>
      </div>
      <div>
        <div class="font-medium mb-3">Contacto</div>
        <ul class="space-y-2 text-sm text-graymid">
          <li>Tel: +51 962 506 653</li>
          <li>Tel: +51 952 854 295</li>
          <li>Tel: +51 950 906 112</li>
          <li>Email: Acimser.rental@gmail.com</li>
          <li>Dirección: AV JUAN PABLO VIZCARDO Y GUZMÁN S/N, Tolconi Chachas, Arequipa</li>
        </ul>
        <div class="flex gap-3 mt-4">
          <a href="#" class="w-9 h-9 grid place-items-center rounded bg-gray-800 hover:bg-primary">
            <Share2 class="w-5 h-5" />
          </a>
          <a href="#" class="w-9 h-9 grid place-items-center rounded bg-gray-800 hover:bg-primary">
            <LinkIcon class="w-5 h-5" />
          </a>
          <a href="#" class="w-9 h-9 grid place-items-center rounded bg-gray-800 hover:bg-primary">
            <Globe class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div class="text-center text-xs text-gray-500 py-4">© 2025 Transporte Industrial. Todos los derechos reservados.</div>
  </footer>
</template>

<style scoped>
</style>