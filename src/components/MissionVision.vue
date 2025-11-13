<script setup>
import { Target, Eye, Heart } from 'lucide-vue-next'
</script>

<template>
  <section class="bg-dark text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 rounded-xl bg-gray-800 border border-gray-700">
          <Target class="w-10 h-10 text-primary" />
          <div class="mt-3 font-semibold">Nuestra Misión</div>
          <p class="text-sm text-gray-300 mt-1">En Acimser Rental, nos dedicamos a proporcionar soluciones de transporte y alquiler de maquinaria pesada que superan las expectativas de nuestros clientes. Ofrecemos servicios de alta calidad, seguros y eficientes, contribuyendo al éxito de los proyectos y al desarrollo sostenible de las comunidades en las que operamos.</p>
        </div>
        <div class="p-6 rounded-xl bg-gray-800 border border-gray-700">
          <Eye class="w-10 h-10 text-primary" />
          <div class="mt-3 font-semibold">Nuestra Visión</div>
          <p class="text-sm text-gray-300 mt-1">Ser la empresa líder en alquiler de vehículos y maquinaria pesada en la región, reconocida por nuestra excelencia en el servicio, innovación y compromiso con la seguridad y el medio ambiente, expandiendo nuestra presencia y capacidad operativa.</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="text-2xl font-bold mb-4">Nuestros Valores</div>
        <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div class="p-6 rounded-xl bg-gray-800 border border-gray-700">
            <Heart class="w-10 h-10 text-primary" />
            <div class="mt-3 font-semibold">Calidad</div>
            <p class="text-sm text-gray-300 mt-1">Servicios y equipos de la más alta calidad.</p>
          </div>
          <div class="p-6 rounded-xl bg-gray-800 border border-gray-700">
            <Heart class="w-10 h-10 text-primary" />
            <div class="mt-3 font-semibold">Seguridad</div>
            <p class="text-sm text-gray-300 mt-1">Protocolos rigurosos para proteger a nuestro equipo.</p>
          </div>
          <div class="p-6 rounded-xl bg-gray-800 border border-gray-700">
            <Heart class="w-10 h-10 text-primary" />
            <div class="mt-3 font-semibold">Innovación</div>
            <p class="text-sm text-gray-300 mt-1">Mejora continua y adaptación al mercado.</p>
          </div>
          <div class="p-6 rounded-xl bg-gray-800 border border-gray-700">
            <Heart class="w-10 h-10 text-primary" />
            <div class="mt-3 font-semibold">Responsabilidad</div>
            <p class="text-sm text-gray-300 mt-1">Cumplimiento legal y medioambiental.</p>
          </div>
          <div class="p-6 rounded-xl bg-gray-800 border border-gray-700">
            <Heart class="w-10 h-10 text-primary" />
            <div class="mt-3 font-semibold">Compromiso</div>
            <p class="text-sm text-gray-300 mt-1">Relaciones sólidas basadas en la confianza.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>