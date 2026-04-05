const greetings = {
    en: "Hi, how's it going?",
    fr: "Salut, comment ça va ?",
    de: "Hallo, wie geht's dir?"
}

export function load({ params }) {
    return { greeting: greetings[params.lang ?? 'en'] };
}