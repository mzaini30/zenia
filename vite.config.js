const { appConfig } = require('./package.json')
const viteMainJs = require('vite-main-js')
const { preprocess: svelteWindicss } = require('svelte-windicss-preprocess')
const { svelte } = require('@sveltejs/vite-plugin-svelte')
const { port } = appConfig
const production = process.env.NODE_ENV === 'production'
module.exports = {
  server: {
    port: port,
  },
  build: {
    cssCodeSplit: false,
  },
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    dedupe: ['@roxi/routify'],
  },
  plugins: [
    viteMainJs(),
    svelte({
      preprocess: [
        svelteWindicss({
          compile: false,
          prefix: 'windi-',
          globalPreflight: true,
          globalUtility: true,
        }),
      ],
      emitCss: true,
      hot: !production,
    }),
  ],
}
