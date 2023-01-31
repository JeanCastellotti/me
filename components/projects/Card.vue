<script setup>
const props = defineProps({
  id: Number,
  title: String,
  image: String,
  description: String,
  stack: Array,
  link: String,
})

const hasLink = computed(() => {
  return {
    'hover:scale-105': !!props.link,
  }
})
</script>

<template>
  <div
    class="transition relative flex flex-col bg-gray-100 dark:bg-slate-700 rounded-lg overflow-hidden"
    :class="hasLink"
  >
    <NuxtLink v-if="link" :href="link" class="absolute inset-0" />
    <img :src="`./projects/${image}`" alt="" class="object-cover h-40 w-full" />
    <div class="p-4 space-y-5">
      <h3 class="font-semibold text-slate-800 dark:text-slate-100">
        {{ title }}
      </h3>
      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
        {{ description }}
      </p>
    </div>

    <div class="p-4 flex gap-3 items-center mt-auto">
      <AppIcon
        v-for="icon in stack"
        :name="icon.name"
        :key="icon"
        :color-mode="icon.colorMode"
        size="28px"
      />
    </div>
  </div>
</template>
