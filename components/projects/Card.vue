<script setup>
defineProps({
  id: Number,
  title: String,
  image: String,
  description: String,
  stack: Array,
  link: String,
})
</script>

<template>
  <div class="rounded-lg overflow-hidden transition hover:scale-105 relative">
    <NuxtLink v-if="link" :href="link" class="absolute inset-0" />
    <img :src="`./projects/${image}`" alt="" class="object-cover h-40 w-full" />
    <div class="bg-gray-100 dark:bg-slate-700 p-4 space-y-5">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">
        {{ title }}
      </h2>
      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
        {{ description }}
      </p>
      <div class="flex gap-3 items-center">
        <Icon v-for="icon in stack" :name="icon" :key="icon" size="28px" />
      </div>
    </div>
  </div>
</template>
