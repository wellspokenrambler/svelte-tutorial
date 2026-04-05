import { redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {
    if(!cookies.get('loggedIn')) {
        redirect(303, `/iv-advanced-sveltekit/advanced-routing-example/auth-pages/login?redirectTo=${url.pathname}`);
    }
}
