export async function rollD20() {
    return new Promise((resolve, reject) => {
		setTimeout(() => {
			// simulate a flaky network
			if (Math.random() < 0.3) {
				reject(new Error('Request failed'));
				return;
			}

			resolve(Math.floor(Math.random() * 20) + 1);
		}, 1000);
	});

}