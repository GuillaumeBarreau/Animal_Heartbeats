import { shallow } from 'enzyme';
import React from 'react';
import Switch from './Switch';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('Switch component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			theme: 'dark',
		});
	});

	it('Render Switch component', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Switch />
			</Provider>
		);
		expect(cmp.exists()).toBe(true);
	});

	it('Snapshot testing', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Switch />
			</Provider>
		);
		expect(cmp.html()).toMatchSnapshot();
	});
});
