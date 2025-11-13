<script setup>
const props = defineProps({ item: Object })
const emit = defineEmits(['close'])
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur flex items-center justify-center p-4">
    <div class="bg-gray-900 border border-gray-800 rounded-xl max-w-xl w-full overflow-hidden">
      <div class="relative">
        <img :src="props.item.image" :alt="props.item.name" class="h-56 w-full object-cover" />
        <button @click="emit('close')" class="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2">✕</button>
      </div>
      <div class="p-5">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold">{{ props.item.name }}</h3>
          <span class="text-xs uppercase bg-yellow-400 text-black px-2 py-1 rounded">{{ props.item.type }}</span>
        </div>
        <p class="text-gray-300 mt-2">{{ props.item.description }}</p>
        <ul class="mt-3 text-sm text-gray-300 list-disc list-inside">
          <li v-for="f in props.item.features" :key="f">{{ f }}</li>
        </ul>
        <div class="mt-5 flex gap-3">
          <a href="/contact" class="bg-yellow-400 text-black px-4 py-2 rounded">Solicitar cotización</a>
          <button @click="emit('close')" class="border border-gray-700 px-4 py-2 rounded">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>