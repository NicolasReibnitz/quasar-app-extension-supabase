import { SupabasePlugin } from '@vuemodel/supabase/src/main';
import { supabase } from 'src/js/supabase';

export default ({ app }) => {
	if (process.env.GLASNOST_MODE === 'editor') {
		app.use(SupabasePlugin, { supabaseInstance: supabase });
	}
};
