<script setup>
const props = defineProps({
  icon: String,
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
    <Icon :name="icon" size="38px" />
    <div class="w-full bg-gray-100 dark:bg-slate-700 h-6 w-96 rounded-lg">
      <div
        class="bg-gradient h-6 bg-gradient-to-r from-sky-500 to-sky-400 rounded-lg"
        :class="level"
      ></div>
    </div>
  </div>
</template>
