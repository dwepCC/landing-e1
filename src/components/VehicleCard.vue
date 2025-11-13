<script setup>
const props = defineProps({ item: Object, showAction: { type: Boolean, default: false } })
const emit = defineEmits(['view'])
</script>

<template>
  <div class="group bg-gray-800 rounded-lg overflow-hidden">
    <img :src="props.item.image" :alt="props.item.name" class="h-52 w-full object-cover" />
    <div class="p-4">
      <div class="flex items-center justify-between">
        <div class="font-semibold">{{ props.item.name }}</div>
        <span class="text-xs uppercase bg-yellow-400 text-black px-2 py-1 rounded">{{ props.item.type }}</span>
      </div>
      <p class="text-sm text-gray-300 mt-2">{{ props.item.description }}</p>
      <button v-if="props.showAction" @click="emit('view', props.item)" class="mt-3 w-full bg-yellow-400 text-black px-4 py-2 rounded font-medium">Ver más</button>
    </div>
  </div>
</template>

<style scoped>
</style>