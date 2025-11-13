<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
import { RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
onMounted(()=>{ AOS.init({ once: true, duration: 600 }) })
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-white">
    <Header />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<style scoped>
</style>