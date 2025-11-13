<script setup>
import { ref, computed } from 'vue'
import vehicles from '../assets/data/vehicles.json'
import VehicleCard from './VehicleCard.vue'

const filter = ref('all')
const types = ['all', ...Array.from(new Set(vehicles.map(v=>v.type)))]
const filtered = computed(()=> filter.value==='all'? vehicles : vehicles.filter(v=>v.type===filter.value))
</script>

<template>
  <section class="bg-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex flex-wrap gap-3">
        <button v-for="t in types" :key="t" @click="filter=t" class="px-4 py-2 rounded border border-gray-700" :class="filter===t ? 'bg-primary hover:bg-primary-hover text-white border-primary' : 'text-primary'">{{ t==='all' ? 'Todos' : t }}</button>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <VehicleCard v-for="v in filtered" :key="v.id" :item="v" />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>