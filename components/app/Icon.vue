<script setup>
const props = defineProps({
  name: String,
  size: String,
  colorMode: Boolean,
})

const colorMode = useColorMode()

const icon = computed(() => {
  if (props.colorMode)
    return `${props.name}-${colorMode.value === 'light' ? 'dark' : 'light'}`
  return props.name
})
</script>

<template>
  <Icon :name="icon" :size="size" />
</template>
