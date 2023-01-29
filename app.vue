<template>
  <div class="min-h-screen bg-white dark:bg-slate-800 space-y-32">
    <TheHeader />
    <TheHero />
    <AppSection
      title="Compétences"
      title-position="left"
      icon="healthicons:high-bars-outline"
    >
      <SkillsList />
      <div class="flex-1">
        <SkillsDiploma />
      </div>
    </AppSection>
    <AppSection title="Projets" title-position="right" icon=""></AppSection>
  </div>
</template>
