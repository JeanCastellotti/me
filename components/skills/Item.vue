<script setup>
const props = defineProps({
  icon: Object,
  level: String,
})

const level = computed(() => {
  return {
    'w-1/5': props.level === '1/5',
    'w-2/5': props.level === '2/5',
    'w-3/5': props.level === '3/5',
    'w-4/5': props.level === '4/5',
    'w-5/5': props.level === '5/5',
  }
})
</script>

<template>
  <div class="flex gap-5 items-center">
    <AppIcon :name="icon.name" size="38px" :color-mode="icon.colorMode" />
    <div class="w-full bg-gray-100 dark:bg-slate-700 h-6 w-96 rounded-lg">
      <div
        class="bg-gradient h-6 bg-gradient-to-r from-sky-500 to-sky-400 rounded-lg"
        :class="level"
      ></div>
    </div>
  </div>
</template>
