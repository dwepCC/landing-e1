<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, Keyboard, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import vehicles from '../assets/data/vehicles.json'
import VehicleModal from './VehicleModal.vue'
import VehicleCard from './VehicleCard.vue'

const selected = ref(null)
function open(item){ selected.value = item }
function close(){ selected.value = null }
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Fondo decorativo con gradiente -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-[#029374] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-[#029374] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-[#029374] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10 w-full px-2 sm:px-4 py-4">
      <!-- Encabezado -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Nuestra Flota de 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#029374] to-[#02b894]">
            Vehículos
          </span>
        </h2>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Explora nuestra selección de vehículos premium diseñados para satisfacer tus necesidades
        </p>
      </div>

      <!-- Swiper -->
      <div class="swiper-container-custom w-full max-w-[380px] sm:max-w-[680px] md:max-w-[760px] lg:max-w-none mx-auto">
        <Swiper 
          :modules="[Autoplay, Pagination, Navigation, Keyboard, EffectCoverflow]" 
          :slides-per-view="1" 
          :space-between="0" 
          :breakpoints="{
            640: { slidesPerView: 1, spaceBetween: 8 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
          }" 
          :loop="true" 
          :autoplay="{ 
            delay: 4000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }" 
          :pagination="{ 
            clickable: true,
            dynamicBullets: true
          }" 
          :navigation="true" 
          :keyboard="{ enabled: true }"
          :centeredSlides="false"
          :autoHeight="true"
          class="w-full py-6 sm:py-8 min-h-[320px] sm:min-h-[360px]"
        >
          <SwiperSlide v-for="v in vehicles" :key="v.id" class="pb-12">
            <VehicleCard :item="v" :show-action="true" @view="open" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <VehicleModal v-if="selected" :item="selected" @close="close" />
  </div>
</template>

<style scoped>
/* Animaciones de blob */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Estilos del Swiper */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #029374;
  background: rgba(2, 147, 116, 0.1);
  backdrop-filter: blur(10px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(2, 147, 116, 0.3);
  transition: all 0.3s ease;
  z-index: 10;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(2, 147, 116, 0.2);
  border-color: #029374;
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.3);
  opacity: 1;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: #029374;
  width: 30px;
  border-radius: 6px;
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
}
/* Evitar desbordes en móviles */
:deep(.swiper) { width: 100%; overflow: hidden; }
:deep(.swiper-button-next) { right: 8px; }
:deep(.swiper-button-prev) { left: 8px; }
@media (max-width: 640px) {
  :deep(.swiper-button-next), :deep(.swiper-button-prev) { display: none; }
}
:deep(.swiper-button-next) { right: 8px; }
:deep(.swiper-button-prev) { left: 8px; }
</style>