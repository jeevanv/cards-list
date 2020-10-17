
export const getRandomItems = (items, noOfitems) => {
	const randomItems = {};

	while(noOfitems) {
		let randomIndex = Math.floor(Math.random() * items.length);
		if(!randomItems[randomIndex]) {
			randomItems[randomIndex] = items[randomIndex];
			noOfitems--;
		}
	}
	return Object.values(randomItems);
}
