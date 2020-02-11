import { shallow } from 'enzyme';
import React from 'react';
import SortBar from './SortBar';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('SortBar component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			theme: 'dark',
		});
	});

	it('Render SortBar component', () => {
		const cmp = shallow(
			<Provider store={store}>
				<SortBar />
			</Provider>
		);
		expect(cmp.exists()).toBe(true);
	});

	it('Snapshot testing', () => {
		const cmp = shallow(
			<Provider store={store}>
				<SortBar />
			</Provider>
		);
		expect(cmp.html()).toMatchSnapshot();
	});
});
