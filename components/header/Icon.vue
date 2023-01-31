<script setup>
defineProps({
  name: String,
  link: String,
})
</script>

<template>
  <NuxtLink
    :href="link"
    class="rounded-lg h-10 w-10 bg-sky-500 p-1 text-white flex transition hover:scale-105"
  >
    <Icon :name="name" size="24px" class="m-auto" />
  </NuxtLink>
</template>
