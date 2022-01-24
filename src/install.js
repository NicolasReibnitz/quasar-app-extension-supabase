var fs = require('fs')

module.exports = function (api) {
  // ensure @vuemodel/supabase is installed
  api.extendPackageJson({
    dependencies: {
      "@vuemodel/supabase": "^0.0.5"
    }
  })
}
