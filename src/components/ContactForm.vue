<script setup>
import { reactive } from 'vue'
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
  <section class="bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold">Contacto</h2>
        <p class="text-gray-300 mt-3">Escríbenos para coordinar servicios y cotizaciones.</p>
        <div class="mt-6 space-y-4">
          <div class="flex items-center gap-3"><span class="w-8 h-8 bg-yellow-400 rounded"></span><span>+51 987 654 321</span></div>
          <div class="flex items-center gap-3"><span class="w-8 h-8 bg-yellow-400 rounded"></span><span>info@transporteindustrial.com</span></div>
          <div class="flex items-center gap-3"><span class="w-8 h-8 bg-yellow-400 rounded"></span><span>Lima, Perú</span></div>
        </div>
      </div>
      <div>
        <form @submit.prevent="submit" class="space-y-4">
          <div>
            <input v-model="form.name" placeholder="Nombre" class="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3" />
            <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
          </div>
          <div>
            <input v-model="form.email" placeholder="Email" class="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3" />
            <p v-if="errors.email" class="text-red-400 text-sm mt-1">{{ errors.email }}</p>
          </div>
          <div>
            <input v-model="form.phone" placeholder="Teléfono" class="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3" />
            <p v-if="errors.phone" class="text-red-400 text-sm mt-1">{{ errors.phone }}</p>
          </div>
          <div>
            <textarea v-model="form.message" placeholder="Mensaje" rows="5" class="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3"></textarea>
            <p v-if="errors.message" class="text-red-400 text-sm mt-1">{{ errors.message }}</p>
          </div>
          <button type="submit" class="bg-yellow-400 text-black px-5 py-3 rounded font-semibold">Enviar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>