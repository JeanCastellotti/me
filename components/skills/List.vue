<script setup>
import skills from '@/data/skills.json'
</script>

<template>
  <div class="flex-1 w-4/5 sm:w-3/5 lg:w-auto lg:w-auto space-y-5">
    <SkillsItem v-for="skill in skills" :key="skill.name" v-bind="skill" />
  </div>
</template>
