<script setup>
const props = defineProps({ item: Object, showAction: { type: Boolean, default: false } })
const emit = defineEmits(['view'])
</script>

<template>
  <div class="group bg-gray-800 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary h-full flex flex-col" tabindex="0">
    <img :src="props.item.image" :alt="props.item.name" class="w-full object-cover h-44 sm:h-52 md:h-64" />
    <div class="p-4">
      <div class="flex items-center justify-between">
        <div class="font-semibold">{{ props.item.name }}</div>
        <span class="text-xs uppercase bg-primary text-white px-2 py-1 rounded">{{ props.item.type }}</span>
      </div>
      <p class="text-sm text-gray-300 mt-2">{{ props.item.description }}</p>
      <button v-if="props.showAction" @click="emit('view', props.item)" class="mt-3 w-full bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded font-medium">Ver más</button>
    </div>
  </div>
</template>

<style scoped>
</style>