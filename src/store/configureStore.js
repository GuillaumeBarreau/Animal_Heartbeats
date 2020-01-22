import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/combineReducers';

function logger({ getState }) {
	return next => action => {
		return next(action);
	};
}

export const store = createStore(reducers, applyMiddleware(logger));
 