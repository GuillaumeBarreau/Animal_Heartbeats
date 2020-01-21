import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '../card/Card';
import { INITDATA } from '../../store/actions/actionTypes';

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
			<h2>DATA NOT FOUND</h2>
		)}
	</Wrapper>
);

const mapStateToProps = state => {
	return {
		hearthData: state.fca.data,
	};
};

const mapDispatchToProps = dispatch => {
	return dispatch({
		type: INITDATA,
	});
};

export default connect(mapStateToProps, mapDispatchToProps)(WrapperCard);
