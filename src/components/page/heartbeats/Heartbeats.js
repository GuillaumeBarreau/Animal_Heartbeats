import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WrapperCard from '../../wrapperCard/WrapperCard';
import SortBar from '../../sortBar/SortBar';
import Title from '../../title/Title';
import Switch from '../../switch/Switch';

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
			<Title>Heartbeats</Title>
			<SortBar />
			<WrapperCard />
		</Main>
	);
};

const mapStateToProps = state => {
	
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(Heartbeats);
