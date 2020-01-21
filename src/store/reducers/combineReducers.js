import { combineReducers } from 'redux';

import fca from './fcaReducer';
import theme from './themeReducer';

const reducers = combineReducers({
	fca,
	theme
});

export default reducers;
