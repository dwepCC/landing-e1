<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import vehicles from '../assets/data/vehicles.json'
import VehicleModal from './VehicleModal.vue'
import VehicleCard from './VehicleCard.vue'

const selected = ref(null)
function open(item){ selected.value = item }
function close(){ selected.value = null }
</script>

<template>
  <div>
    <Swiper :slides-per-view="1" :space-between="16" :breakpoints="{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}">
      <SwiperSlide v-for="v in vehicles" :key="v.id">
        <VehicleCard :item="v" :show-action="true" @view="open" />
      </SwiperSlide>
    </Swiper>

    <VehicleModal v-if="selected" :item="selected" @close="close" />
  </div>
</template>

<style scoped>
</style>