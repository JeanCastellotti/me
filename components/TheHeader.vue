<script setup>
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <header
    class="max-w-screen-lg mx-auto px-4 py-5 flex items-center justify-between"
  >
    <div class="font-swanky text-slate-900 dark:text-white text-3xl">
      Jean Castellotti
    </div>
    <div class="flex gap-8">
      <div class="flex gap-3">
        <div
          class="rounded-lg h-10 w-10 bg-sky-500 p-1 text-white flex transition hover:scale-105"
        >
          <Icon name="bxl:linkedin" size="24px" class="m-auto" />
        </div>
        <div
          class="rounded-lg h-10 w-10 bg-sky-500 p-1 text-white flex transition hover:scale-105"
        >
          <Icon name="uil:github-alt" size="24px" class="m-auto" />
        </div>
      </div>
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
    </div>
  </header>
</template>
