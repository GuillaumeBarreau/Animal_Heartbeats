import { shallow, mount } from 'enzyme';
import React from 'react';
import Heartbeats from './Heartbeats';
import WrapperCard from '../../wrapperCard/WrapperCard';
import SortBar from '../../sortBar/SortBar';
import Title from '../../title/Title';
import Switch from '../../switch/Switch';
import Footer from '../../footer/Footer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('Heartbeats component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			theme: 'dark',
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

	it('Render Heartbeats component', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Heartbeats></Heartbeats>
			</Provider>
		);
		expect(cmp.exists()).toBe(true);
	});

	it('should render the child WrapperCard component', () => {
		const cmp = mount(
			<Provider store={store}>
				<Heartbeats></Heartbeats>
			</Provider>
		);
		expect(cmp.find(WrapperCard).exists()).toBe(true);
	});

	it('should render the child SortBar component', () => {
		const cmp = mount(
			<Provider store={store}>
				<Heartbeats></Heartbeats>
			</Provider>
		);
		expect(cmp.find(SortBar).exists()).toBe(true);
	});

	it('should render the child Title component', () => {
		const cmp = mount(
			<Provider store={store}>
				<Heartbeats></Heartbeats>
			</Provider>
		);
		expect(cmp.find(Title).exists()).toBe(true);
	});

	it('should render the child Switch component', () => {
		const cmp = mount(
			<Provider store={store}>
				<Heartbeats></Heartbeats>
			</Provider>
		);
		expect(cmp.find(Switch).exists()).toBe(true);
	});

	it('should render the child Footer component', () => {
		const cmp = mount(
			<Provider store={store}>
				<Heartbeats></Heartbeats>
			</Provider>
		);
		expect(cmp.find(Footer).exists()).toBe(true);
	});

	it('should display a txt prop data name ', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Heartbeats />
			</Provider>
		);
		expect(cmp.html()).toContain('prop name 01');
	});

	it('should display a txt prop data fcm ', () => {
		const cmp = shallow(
			<Provider store={store}>
				<Heartbeats />
			</Provider>
		);
		expect(cmp.html()).toContain('100');
	});
});
