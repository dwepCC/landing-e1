<script setup>
import { reactive } from 'vue'
import { Phone, Mail, MapPin, Send } from 'lucide-vue-next'
const form = reactive({ name:'', email:'', phone:'', message:'' })
const errors = reactive({})
function validate(){
  errors.name = form.name? '' : 'Requerido'
  errors.email = /.+@.+\..+/.test(form.email)? '' : 'Email inválido'
  errors.phone = form.phone? '' : 'Requerido'
  errors.message = form.message? '' : 'Requerido'
  return !errors.name && !errors.email && !errors.phone && !errors.message
}
function submit(){
  if(!validate()) return
  alert('Mensaje enviado')
}
</script>

<template>
  <section class="bg-light text-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold">Contacto</h2>
        <p class="text-graymid mt-3">Escríbenos para coordinar servicios y cotizaciones.</p>
        <div class="mt-6 space-y-4">
          <div class="flex items-center gap-3"><Phone class="w-6 h-6 text-primary" /><span>+51 962 506 653</span></div>
          <div class="flex items-center gap-3"><Phone class="w-6 h-6 text-primary" /><span>+51 952 854 295</span></div>
          <div class="flex items-center gap-3"><Phone class="w-6 h-6 text-primary" /><span>+51 950 906 112</span></div>
          <div class="flex items-center gap-3"><Mail class="w-6 h-6 text-primary" /><span>Acimser.rental@gmail.com</span></div>
          <div class="flex items-center gap-3"><MapPin class="w-6 h-6 text-primary" /><span>AV JUAN PABLO VIZCARDO Y GUZMÁN S/N, Tolconi Chachas, Arequipa</span></div>
        </div>
      </div>
      <div>
        <form @submit.prevent="submit" class="space-y-4">
          <div>
            <input v-model="form.name" placeholder="Nombre" class="w-full bg-white border border-gray-300 text-dark rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
          </div>
          <div>
            <input v-model="form.email" placeholder="Email" class="w-full bg-white border border-gray-300 text-dark rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            <p v-if="errors.email" class="text-red-400 text-sm mt-1">{{ errors.email }}</p>
          </div>
          <div>
            <input v-model="form.phone" placeholder="Teléfono" class="w-full bg-white border border-gray-300 text-dark rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            <p v-if="errors.phone" class="text-red-400 text-sm mt-1">{{ errors.phone }}</p>
          </div>
          <div>
            <textarea v-model="form.message" placeholder="Mensaje" rows="5" class="w-full bg-white border border-gray-300 text-dark rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
            <p v-if="errors.message" class="text-red-400 text-sm mt-1">{{ errors.message }}</p>
          </div>
          <button type="submit" class="bg-primary text-white px-5 py-3 rounded font-semibold flex items-center gap-2">
            <Send class="w-5 h-5" />
            <span>Enviar</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>