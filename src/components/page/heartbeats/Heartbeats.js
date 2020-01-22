import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WrapperCard from '../../wrapperCard/WrapperCard';
import SortBar from '../../sortBar/SortBar';
import Title from '../../title/Title';
import Switch from '../../switch/Switch';
import Footer from '../../footer/Footer';

const Main = styled.main`
	text-align: center;
	max-width: 100vw;
	min-height: 100vh;
	background: ${props => props.theme.primary};
`;

const Heartbeats = ({ theme }) => {

	return (
		<Main theme={theme} className="App">
			<Switch />
			<Title>Animal Heartbeats</Title>
			<SortBar />
			<WrapperCard />
			<Footer />
		</Main>
	);
};

const mapStateToProps = state => {
	
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(Heartbeats);
