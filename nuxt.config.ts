export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {enabled: true},
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@unocss/nuxt', '@nuxtjs/i18n'],
  app: {
    head: {
      title: 'Noote',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      link: [
        {rel: 'shortcut icon', href: '/favicon.svg'}
      ]
    }
  },
  components: {
    dirs: [
      {
        path: '~/components/',
        pathPrefix: false
      }
    ]
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/app.css'
  ],
  devServer: {
    port: 8888
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
      styles: ['normal', 'italic', 'oblique']
    }
  },
  i18n: {
    defaultLocale: 'ja',
    strategy: 'prefix',
    lazy: false,
    bundle: {
      optimizeTranslationDirective: false
    },
    locales: [
      {code: 'ja', name: '🇯🇵 日本語', file: 'ja.yaml'},
      {code: 'en', name: '🇺🇸 English', file: 'en.yaml'},
      {code: 'id', name: '🇮🇩 Indonesia', file: 'id.yaml'}
    ]
  }
});