<script setup>
const props = defineProps({
  name: String,
  size: String,
  colorModeEnabled: Boolean,
})

const colorMode = useColorMode()

const icon = computed(() => {
  if (props.colorModeEnabled)
    return `${props.name}-${colorMode.value === 'light' ? 'dark' : 'light'}`
  return props.name
})
</script>

<template>
  <template v-if="colorModeEnabled">
    <ColorScheme placeholder="..." tag="span">
      <Icon :name="icon" :size="size" />
    </ColorScheme>
  </template>
  <Icon v-else :name="icon" :size="size" />
</template>
