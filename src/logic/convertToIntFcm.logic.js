export const convertToIntFcm = fcm => {
	const calcAverage = fcm.includes('-')
		? fcm.split('-').reduce((cur, prev) => (parseInt(cur) + parseInt(prev)) / 2)
		: parseInt(fcm);

	return calcAverage;
};
