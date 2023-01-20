<script setup>
import skills from '@/data/skills.json'

console.log(skills)
</script>

<template>
  <section class="max-w-screen-lg mx-auto px-4 flex flex-col">
    <h2
      class="self-end rotate-1 font-swanky text-slate-800 dark:text-slate-100 text-3xl mb-5"
    >
      Mes compétences
    </h2>
    <div class="flex gap-10 items-center">
      <div class="flex-1 space-y-5">
        <SkillsItem v-for="skill in skills" :key="skill.name" v-bind="skill" />
      </div>
      <div class="flex-1"></div>
    </div>
  </section>
</template>
