import React from 'react';
import { connect } from 'react-redux';
import WrapperCard from '../../wrapperCard/WrapperCard';
import SortBar from '../../sortBar/SortBar';
import Title from '../../title/Title';
import Switch from '../../switch/Switch';
import Footer from '../../footer/Footer';
// import Styled components
import { Main } from './Heartbeats.styled';

const Heartbeats = ({ theme }) => {
	const props = {
		theme,
	};

	return (
		<Main {...props} className="App">
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
