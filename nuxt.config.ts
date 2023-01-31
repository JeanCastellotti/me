// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },

  app: {
    head: {
      title: "Coucou ! Moi c'est Jean.",
      meta: [
        {
          name: 'description',
          content:
            "Autodidacte, j'ai appris des langages de programmation pendant mon temps libre puis j'ai décidé de réaliser une formation de développeur web afin d'obtenir un titre professionnelle. Lors de cette formation, je me suis tourné vers JavaScript et son écosystème.",
        },
      ],
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Swanky+and+Moo+Moo&display=swap',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
      ],
    },
  },
})
