<template>
  <AppWrapper>
    <AppHeader />
    <AppHero />
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
  </AppWrapper>
</template>
