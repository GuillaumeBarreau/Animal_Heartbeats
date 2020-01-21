import { INITDATA, FILTERBYNAME } from '../actions/actionTypes';
import fcaData from '../../data/json/fca_en_EN.json';
import { filterByValue } from '../../logic/filterByValue.logic';
import { suffleData } from '../../logic/suffleData.logic';

const initialState = {
	data: [],
};

const fcaReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITDATA:
			return {
				data: suffleData([...fcaData]),
			};

		case FILTERBYNAME:
			
			return {
				data: filterByValue([...fcaData], action.value),
			};

		default:
			return state;
	}
};

export default fcaReducer;
