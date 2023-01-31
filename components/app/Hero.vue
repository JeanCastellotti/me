<template>
  <section
    class="max-w-screen-md mx-auto px-4 flex flex-col md:flex-row gap-20 items-center"
  >
    <div class="flex-1 flex justify-center">
      <div
        class="-rotate-45 bg-gray-200 dark:bg-slate-700 w-44 h-44 md:w-64 md:h-64"
        style="border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%"
      >
        <img
          src="/portrait.jpeg"
          alt="Portrait de Jean"
          class="w-44 h-44 md:w-64 md:h-64 rotate-45"
          style="border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%"
        />
      </div>
    </div>
    <div class="flex-1">
      <h1
        class="font-swanky text-3xl text-slate-800 dark:text-slate-100 -rotate-1 relative -top-3 text-center md:text-left"
      >
        Coucou ! Moi c'est Jean
      </h1>
      <p
        class="text-slate-500 dark:text-slate-400 text-center md:text-left leading-loose"
      >
        Autodidacte, j'ai appris des langages de programmation pendant mon temps
        libre puis j'ai décidé de réaliser une formation de développeur web afin
        d'obtenir un titre professionnelle. Lors de cette formation, je me suis
        tourné vers JavaScript et son écosystème.
      </p>
    </div>
  </section>
</template>
