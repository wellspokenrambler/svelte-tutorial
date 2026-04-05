import { redirect } from '@sveltejs/kit';

export const actions = {
    default: ({ cookies, url }) => {
        cookies.set('loggedIn', 'true', { path: '/' });
        redirect(303, url.searchParams.get('redirectTo') ?? '/iv-advanced-sveltekit/4_advanced-routing/auth-pages');
    }
};