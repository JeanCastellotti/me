<script setup>
import projects from '@/data/projects.json'
</script>

<template>
  <div class="grid sm:grid-cols-4 md:grid-cols-6 gap-10">
    <ProjectsCard
      v-for="project in projects"
      :key="project.id"
      v-bind="project"
      class="col-span-2"
    />
  </div>
</template>
