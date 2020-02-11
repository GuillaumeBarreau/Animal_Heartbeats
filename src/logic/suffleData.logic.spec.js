import { suffleData } from './suffleData.logic';

describe('SuffleData function', () => {
	let list;

	beforeEach(() => {
		list = ['1', '2'];
	});

	it('Should Sort a list array', () => {
		const result = suffleData(list);
		expect(result).not.toEqual(list);
	});
});
