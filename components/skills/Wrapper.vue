<template>
  <div class="flex flex-col md:flex-row gap-10 items-center">
    <slot name="left" />
    <div class="flex-1">
      <slot name="right" />
    </div>
  </div>
</template>
