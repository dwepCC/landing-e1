<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-gray-900" data-aos="fade-up">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight">Potencia y confiabilidad para tus operaciones</h1>
          <p class="text-gray-300 mt-4">Alquiler de vehículos industriales y maquinaria pesada para minería y logística.</p>
          <div class="mt-6 flex gap-4">
            <RouterLink to="/fleet" class="bg-yellow-400 text-black px-5 py-3 rounded font-semibold">Ver Flota</RouterLink>
            <RouterLink to="/contact" class="border border-yellow-400 text-yellow-400 px-5 py-3 rounded">Cotizar</RouterLink>
          </div>
        </div>
        <div>
          <HeroSlider />
        </div>
      </div>
    </div>
  </section>
  <AboutSection data-aos="fade-up" />
  <ServicesSection data-aos="fade-up" />
</template>

<style scoped>
</style>