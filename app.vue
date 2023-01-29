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
        <div
          class="flex flex-col gap-5 bg-slate-700 border-2 border-slate-500 p-4 rounded-lg"
        >
          <Icon name="icons8:diploma-1" size="64px" class="text-slate-100" />
          <div
            class="flex flex-col items-center text-slate-400 text-3xl font-swanky"
          >
            <span>Titre professionnel</span>
            <span>développeur web et web mobile</span>
          </div>
          <Icon
            name="fa-solid:signature"
            size="48px"
            class="self-end text-slate-100"
          />
        </div>
      </div>
    </AppSection>
    <AppSection title="Projets" title-position="right" icon=""></AppSection>
  </div>
</template>
