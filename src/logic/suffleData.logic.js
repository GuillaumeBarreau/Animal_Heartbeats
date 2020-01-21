export const suffleData = list => {
	const newData = list.sort(() => Math.random() - 0.5);

	return newData;
};
