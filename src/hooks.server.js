export async function handle({event, resolve}) {
    event.locals.answer = "42 (as sent by the handle hook)";
    return await resolve(event, {
        transformPageChunk: ({html}) => html.replace('<body', '<body style="background-color: bisque; font-family: Cursive;"')
    });
}