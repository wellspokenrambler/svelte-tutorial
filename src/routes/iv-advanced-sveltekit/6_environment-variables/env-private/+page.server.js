import { redirect, fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export function load({ cookies }) {
    if(cookies.get('allowed')) {
        redirect(303, '/iv-advanced-sveltekit/6_environment-variables/env-private/welcome');
    }
};

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        if(data.get('passphrase') === env.PASSPHRASE) {
            cookies.set('allowed', 'true', {path: '/'});
            redirect(303, '/iv-advanced-sveltekit/6_environment-variables/env-private/welcome');
        } else {
            return fail(403, {error: 'Incorrect passphrase'});
        }
    }
};