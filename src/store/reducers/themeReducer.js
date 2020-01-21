import { WHITETHEME, DARKTHEME } from '../actions/actionTypes';
import { whiteTemplate } from '../../theme/whiteTemplate';
import { darkTemplate } from '../../theme/darkTemplate';

const initialState = darkTemplate;

const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case DARKTHEME:
			return darkTemplate;

		case WHITETHEME:
			return whiteTemplate;

		default:
			return state;
	}
};

export default themeReducer;
