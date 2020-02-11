import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('Footer component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			theme: 'dark',
		});
	});

	it('Render Footer component', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Footer />
			</Provider>
		);
		expect(cmp.exists()).toBe(true);
	});

	it('Snapshot testing', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Footer />
			</Provider>
		);
		expect(cmp.html()).toMatchSnapshot();
	});
});
