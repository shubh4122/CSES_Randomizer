import { defineConfig } from 'wxt';

// See https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html
// export default defineConfig({
//   modules: ['@wxt-dev/module-react'],
// });


export default defineConfig({
  modules: ['@wxt-dev/module-react'],

  manifest: {
    name: 'CSES Randomizer',
    description: 'Randomized CSES problem practice with topic-blind selection and progress tracking.',
    version: '1.0.0',

    permissions: ['storage']
  },

  webExt: {
    disabled: true
  }
});