import { SupabasePlugin } from '@vuemodel/supabase'
import supabaseConfig from 'src/config/supabase.js'

export default ({ app }) => {
  app.install(SupabasePlugin, supabaseConfig)
}