export function load({ cookies }) {
    const visited = cookies.get('visited') || 'false';

    cookies.set('visited', 'true', {
        path: '/iii-basic-sveltekit/headers-cookies-example'
    })

    return {
        visited: visited === 'true'
    };
}