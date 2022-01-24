var fs = require('fs')

module.exports = function (api) {
  // ensure @vuemodel/supabase is installed
  api.extendPackageJson({
    dependencies: {
      "@vuemodel/supabase": "^0.0.5"
    }
  })

  // ensure boot file is registered
  api.extendQuasarConf((conf, api) => {
    conf.boot.push('~quasar-app-extension-my-ext/src/boot/vue-model-supabase-install.js')
  })
}
