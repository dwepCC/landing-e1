<script setup>
const services = [
  { title: 'Transporte de personal', desc: 'Traslado seguro de personal a operaciones.' },
  { title: 'Alquiler de maquinaria', desc: 'Línea amarilla para trabajos pesados.' },
  { title: 'Mantenimiento', desc: 'Planes de mantenimiento preventivo y correctivo.' },
  { title: 'Logística integral', desc: 'Gestión y coordinación de rutas y flota.' },
]
</script>

<template>
  <section class="bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-3xl md:text-4xl font-bold">Servicios</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div v-for="s in services" :key="s.title" class="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-yellow-400 transition transform hover:-translate-y-1">
          <div class="w-10 h-10 bg-yellow-400 rounded"></div>
          <div class="mt-3 font-semibold">{{ s.title }}</div>
          <p class="text-sm text-gray-300 mt-1">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>