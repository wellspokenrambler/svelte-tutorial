export async function load({ fetch }) {
    const response = await fetch('/iv-advanced-sveltekit/1_hooks/ab/a');
    return { message: await response.text() };
}
