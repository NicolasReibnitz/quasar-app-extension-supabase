var fs = require('fs')

module.exports = function (api) {
  api.compatibleWith('quasar', '^2.0.0')
  api.compatibleWith('@quasar/app', '^3.0.0')

  // There may already be a config file for supabase
  // if @vueauth/supabase has created it already.
  // We check if it exists before rendering
  const dir = api.resolve.src()
  const configFile = dir + '/config/supabase.js'
  if(!fs.existsSync(configFile)) {
    api.render('./templates')
  }
}
