export const suffleData = list => {
	const listCopy = [...list];
	const newData = listCopy.sort(() => Math.random() - 0.5);

	return JSON.stringify(newData) === JSON.stringify(list) ? suffleData(list) : newData;
};
