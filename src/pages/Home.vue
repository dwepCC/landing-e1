<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-dark to-black" data-aos="fade-up">
    <div class="absolute inset-0 -z-10 opacity-30">
      <div class="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl" style="background: radial-gradient(circle, rgba(2,147,116,0.35) 0%, rgba(2,147,116,0) 60%)"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl" style="background: radial-gradient(circle, rgba(245,158,11,0.25) 0%, rgba(245,158,11,0) 60%)"></div>
    </div>
    <div class="w-full px-6 lg:px-12 py-14 sm:py-20">
      <div class="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
        <div class="order-1">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">Soluciones industriales confiables</div>
          <h1 class="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">ACIMSER RENTAL</h1>
          <p class="text-graymid mt-4 max-w-xl">Comprometidos con la excelencia y la satisfacción del cliente, impulsando el éxito de tus proyectos mediante transporte y maquinaria de alto desempeño.</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink to="/fleet" class="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold">Ver Flota</RouterLink>
            <RouterLink to="/contact" class="border border-primary text-primary hover:bg-primary-hover hover:text-white px-6 py-3 rounded-lg">Cotizar</RouterLink>
          </div>
          <div class="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div class="p-3 sm:p-4 rounded-xl bg-dark/50">
              <div class="text-2xl font-bold text-primary">+50</div>
              <div class="text-sm text-light">Unidades en flota</div>
            </div>
            <div class="p-3 sm:p-4 rounded-xl bg-dark/50">
              <div class="text-2xl font-bold text-primary">+100</div>
              <div class="text-sm text-light">Proyectos atendidos</div>
            </div>
            <div class="p-3 sm:p-4 rounded-xl bg-dark/50">
              <div class="text-2xl font-bold text-primary">10+</div>
              <div class="text-sm text-light">Años de experiencia</div>
            </div>
          </div>
        </div>
        <div class="relative order-2">
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