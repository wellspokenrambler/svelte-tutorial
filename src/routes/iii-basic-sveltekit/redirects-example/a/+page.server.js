import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(307, '/iii-basic-sveltekit/redirects-example/b');
}