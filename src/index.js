module.exports = function (api) {
  api.compatibleWith('quasar', '^2.0.0')

  if (api.hasVite === true) {
    api.compatibleWith('@quasar/app-vite', '^1.0.0')
  } else {
    // api.hasWebpack === true
    api.compatibleWith('@quasar/app-webpack', '^3.0.0')
  }

  // ensure boot file is registered
  api.extendQuasarConf((conf, api) => {
    conf.boot.push('~@vuemodel/quasar-app-extension-supabase/src/boot/vue-model-supabase-install.js')
  })
}
