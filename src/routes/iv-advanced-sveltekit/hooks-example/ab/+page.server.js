export async function load({ fetch }) {
    const response = await fetch('/iv-advanced-sveltekit/hooks-example/ab/a');
    return { message: await response.text() };
}
