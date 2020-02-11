import { shallow } from 'enzyme';
import React from 'react';
import Title from './Title';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('Title component', () => {
	let children;
	let store;

	beforeEach(() => {
		children = 'children';
		store = mockStore({
			theme: 'dark',
		});
	});

	it('Render Title component', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Title>{children}</Title>
			</Provider>
		);
		expect(cmp.exists()).toBe(true);
	});

	it('Snapshot testing', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Title>{children}</Title>
			</Provider>
		);
		expect(cmp.html()).toMatchSnapshot();
	});

	it('should display childrens', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Title>{children}</Title>
			</Provider>
		);
		expect(cmp.html()).toContain('children');
	});
});
