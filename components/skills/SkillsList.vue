<script setup>
import skills from '@/data/skills.json'
</script>

<template>
  <div class="flex-1 space-y-5">
    <SkillsItem v-for="skill in skills" :key="skill.name" v-bind="skill" />
  </div>
</template>
