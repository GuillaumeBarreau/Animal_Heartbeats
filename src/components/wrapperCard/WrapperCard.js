import React from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card';
import { initAnimalsData } from '../../store/actions/initAnimalsData';
import { Wrapper } from './WrapperCard.styled';

const WrapperCard = ({ hearthData }) => (
	<Wrapper>
		{hearthData.length ? (
			hearthData.map((data, index) => {
				const props = {
					key: data.name,
					name: data.name,
					image: data.image || 0,
					fcm: data.fcm,
				};

				return <Card {...props} />;
			})
		) : (
			<Card name="Sorry, no matches found :(" image={'' || 0} fcm="404" />
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
