export default {
  head: {
    title: 'search-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
    ]
  },

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'players',
        path: 'players/',
        component: resolve(__dirname, 'pages/index.vue'),
        children: [{
          path: 'players/',
          component: 'pages/players',
          children: [
            {
              path: ':name?',
              name: 'name',
              component: 'pages/players/_id',
            },
          ],
        }],
      });
    },
  },
}
