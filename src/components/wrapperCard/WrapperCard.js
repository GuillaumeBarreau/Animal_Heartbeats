import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '../card/Card';
import { initAnimalsData } from '../../store/actions/initAnimalsData';

const Wrapper = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const WrapperCard = ({ hearthData }) => (
	<Wrapper>
		{hearthData.length ? (
			hearthData.map((data, index) => <Card key={data.name} name={data.name} image={data.image || 0} fcm={data.fcm} />)
		) : (
			<Card key="DATANOTFOUND" name="Sorry, no matches found :(" image={'' || 0} fcm="404" />
		)}
	</Wrapper>
);

const mapStateToProps = state => {
	return {
		hearthData: state.fca.data,
	};
};

const mapDispatchToProps = dispatch => {
	return dispatch(initAnimalsData());
};

export default connect(mapStateToProps, mapDispatchToProps)(WrapperCard);
