<script setup>
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div
    class="rounded-lg h-10 w-10 bg-slate-500 dark:bg-slate-400 p-1 text-white dark:text-slate-800 flex cursor-pointer transition hover:scale-105"
    @click="toggleColorMode"
  >
    <ColorScheme placeholder="..." tag="span">
      <Icon
        v-if="$colorMode.value === 'dark'"
        name="material-symbols:light-mode"
        size="24px"
        class="m-auto"
      />
      <Icon
        v-else
        name="material-symbols:dark-mode-rounded"
        size="24px"
        class="m-auto"
      />
    </ColorScheme>
  </div>
</template>
