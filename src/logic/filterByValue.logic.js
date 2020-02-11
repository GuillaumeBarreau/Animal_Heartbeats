export const filterByValue = (list, match) => {
	const nameMatch = list.filter(element => element.name.toLowerCase().includes(match.toLowerCase()));

	return nameMatch;
};
