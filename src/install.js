var fs = require('fs')

module.exports = function (api) {
  // There may already be a config file for supabase
  // if @vueauth/supabase has created it already.
  // We check if it exists before rendering
  const dir = api.appDir
  const configFile = dir + '/config/supabase.js'
  if(!fs.existsSync(configFile)) {
    api.render('./templates')
  }

  // ensure @vuemodel/supabase is installed
  api.extendPackageJson({
    dependencies: {
      "@vuemodel/supabase": "^0.0.5"
    }
  })
}
