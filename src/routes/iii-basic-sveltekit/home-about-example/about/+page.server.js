export async function load() {
	return new Promise((fulfil) => {
		setTimeout(fulfil, Math.random() * 1000 + 500);
	});
}