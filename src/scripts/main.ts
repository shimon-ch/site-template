const asyncFunc = (message: string, delay: number) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(message);
			resolve(null);
		}, delay);
	});
};

async function main() {
	console.log("Start");

	await asyncFunc("First", 2000);
	await asyncFunc("Second", 1000);
	await asyncFunc("Third", 2000);

	console.log("End");
}

main();
