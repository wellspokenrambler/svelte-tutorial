export async function handle({event, resolve}) {
    event.locals.answer = "42 (as sent by the handle hook)";
    return await resolve(event, {
        transformPageChunk: ({html}) => html.replace('<body', '<body style="background-color: bisque; font-family: Cursive;"')
    });
}

export async function handleFetch({event, request, fetch}) {
    const url = new URL(request.url);
    if(url.pathname === '/iv-advanced-sveltekit/hooks-example/ab/a') return await fetch('/iv-advanced-sveltekit/hooks-example/ab/b');
    return await fetch(request);
}

export function handleError({event, error}) {
    console.error('Error in hooks:', error.stack);

    if (event.url.pathname === '/iv-advanced-sveltekit/hooks-example/places/the-bad-place') {
        return {
            message: "yeah yeah the time knife, we've all seen it",
            code: "JEREMYBEARiMY"
        };
    }
}