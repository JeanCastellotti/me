<script setup>
const props = defineProps({
  name: String,
  icons: Object,
  level: String,
})

const level = computed(() => `w-${props.level}`)
</script>

<template>
  <div class="flex gap-5 items-center">
    <Icon v-if="icons.default" :name="icons.default" size="38" />
    <ColorScheme v-else placeholder="..." tag="span">
      <Icon v-if="$colorMode.value === 'light'" :name="icons.dark" size="38" />
      <Icon v-else :name="icons.light" size="38" />
    </ColorScheme>
    <div class="w-full bg-gray-100 dark:bg-slate-700 h-6 w-96 rounded-lg">
      <div
        class="bg-gradient h-6 bg-gradient-to-r from-sky-500 to-sky-400 rounded-lg"
        :class="level"
      ></div>
    </div>
  </div>
</template>
