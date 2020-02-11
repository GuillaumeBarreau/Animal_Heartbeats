import { shallow, mount } from 'enzyme';
import React from 'react';
import WrapperCard from './WrapperCard';
import Card from '../card/Card';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('WrapperCard component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			fca: {
				data: [
					{
						name: 'prop name 01',
						image: '',
						fcm: '100',
					},
				],
			},
		});
	});

	it('Render WrapperCard component', () => {
		const cmp = shallow(
			<Provider store={store}>
				<WrapperCard></WrapperCard>
			</Provider>
		);
		expect(cmp.exists()).toBe(true);
	});

	it('should render the child Card component', () => {
		const cmp = mount(
			<Provider store={store}>
				<WrapperCard></WrapperCard>
			</Provider>
		);
		expect(cmp.find(Card).exists()).toBe(true);
	});

	it('should display a txt prop data name ', () => {
		const cmp = shallow(
			<Provider store={store}>
				<WrapperCard />
			</Provider>
		);
		expect(cmp.html()).toContain('prop name 01');
	});

	it('should display a txt prop data fcm ', () => {
		const cmp = shallow(
			<Provider store={store}>
				<WrapperCard />
			</Provider>
		);
		expect(cmp.html()).toContain('100');
	});
});
