<template>
  <div class="min-h-screen bg-white dark:bg-slate-800 space-y-32 pb-4">
    <TheHeader />
    <TheHero />
    <AppSection
      title="Compétences"
      title-position="left"
      icon="healthicons:high-bars-outline"
    >
      <SkillsWrapper>
        <template #left>
          <SkillsList />
        </template>
        <template #right>
          <SkillsDiploma />
        </template>
      </SkillsWrapper>
    </AppSection>
    <AppSection
      title="Projets"
      title-position="right"
      icon="mingcute:code-fill"
    >
      <ProjectsList />
    </AppSection>
  </div>
</template>
