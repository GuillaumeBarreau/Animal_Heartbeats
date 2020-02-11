import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('Card component', () => {
	let store;
	let props;

	beforeEach(() => {
		store = mockStore({
			theme: 'dark',
		});
		props = {
			name: 'name props',
			fcm: '100',
		};
	});

	it('Render Card component', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Card {...props} />
			</Provider>
		);
		expect(cmp.exists()).toBe(true);
	});

	it('Snapshot testing', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Card {...props} />
			</Provider>
		);
		expect(cmp.html()).toMatchSnapshot();
	});

	it('should display a txt name props', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Card {...props} />
			</Provider>
		);
		expect(cmp.html()).toContain('name props');
	});

	it('should display a txt fcm props', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Card {...props} />
			</Provider>
		);
		expect(cmp.html()).toContain('100');
	});
});
