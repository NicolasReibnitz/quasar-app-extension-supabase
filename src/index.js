var fs = require('fs')

module.exports = function (api) {
  api.compatibleWith('quasar', '^2.0.0')
  api.compatibleWith('@quasar/app', '^3.0.0')

  // ensure boot file is registered
  api.extendQuasarConf((conf, api) => {
    conf.boot.push('~quasar-app-extension-my-ext/src/boot/vue-model-supabase-install.js')
  })
}
